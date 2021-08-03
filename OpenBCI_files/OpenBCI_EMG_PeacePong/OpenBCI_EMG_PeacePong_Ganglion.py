### Modified version of EMG script used to play Chrome Dino Game
### https://docs.openbci.com/Examples/EMGProjects/EMG_Chrome_Dino_Game/
###
### This time, we will use EMG to play a free version of Pong!
### Found @ https://PeacePong.com
###
### Run this script using the following command:
### python3 OpenBCI_EMG_PeacePong_Ganglion.py --serial-port /dev/cu.usbmodem11 --board-id 1
### Ganglion + WiFi command:
### python3 OpenBCI_EMG_PeacePong_Ganglion.py --board-id 4 --ip-address 10.0.1.37 --ip-port 3000

import sys
import argparse
import time
from time import ctime
import numpy as np
import collections
import pyautogui
import pandas as pd
from typing import Any

import brainflow
from brainflow.board_shim import BoardShim, BrainFlowInputParams
from brainflow.data_filter import DataFilter, FilterTypes, AggOperations, WindowFunctions

import tkinter as tk

time_to_play_game = False
board = None
args = None

def parse_arguments():
    parser = argparse.ArgumentParser ()
    
    # use docs to check which parameters are required for specific board, e.g. for Cyton - set serial port
    parser.add_argument ('--timeout', type = int, help  = 'timeout for device discovery or connection', required = False, default = 0)
    parser.add_argument ('--ip-port', type = int, help  = 'ip port', required = False, default = 0)
    parser.add_argument ('--ip-protocol', type = int, help  = 'ip protocol, check IpProtocolType enum', required = False, default = 0)
    parser.add_argument ('--ip-address', type = str, help  = 'ip address', required = False, default = '')
    parser.add_argument ('--serial-port', type = str, help  = 'serial port', required = False, default = '')
    parser.add_argument ('--mac-address', type = str, help  = 'mac address', required = False, default = '')
    parser.add_argument ('--other-info', type = str, help  = 'other info', required = False, default = '')
    parser.add_argument ('--streamer-params', type = str, help  = 'streamer params', required = False, default = '')
    parser.add_argument ('--serial-number', type = str, help  = 'serial number', required = False, default = '')
    parser.add_argument ('--board-id', type = int, help  = 'board id, check docs to get a list of supported boards', required = True)
    parser.add_argument ('--log', action = 'store_true')
    global args
    args = parser.parse_args ()

    params = BrainFlowInputParams ()
    params.ip_port = args.ip_port
    params.serial_port = args.serial_port
    params.mac_address = args.mac_address
    params.other_info = args.other_info
    params.serial_number = args.serial_number
    params.ip_address = args.ip_address
    params.ip_protocol = args.ip_protocol
    params.timeout = args.timeout

    if (args.log):
        BoardShim.enable_dev_board_logger ()
    else:
        BoardShim.disable_board_logger ()
    global board
    board = BoardShim (args.board_id, params)
    print("Arguments have been parsed...")

def connect_to_brainflow_board():
    parse_arguments()
    global board
    tries = 3;
    for x in range(0, tries):
        try:
            print("Attempting to connect. Try #%d" % x)
            if (board is not None):
                board.prepare_session ()
            break
        except brainflow.board_shim.BrainFlowError as e:
            print(e)
            print("Error attempting to connect. Trying again, up to %d times." % tries)
            if x == tries:
                print("Unable to connect to board. :(")
                sys.exit()
            time.sleep(3)

    print("Instantiated BrainFlow Board! Now streaming data from Board!")
    if (board is not None):
        board.start_stream (45000)

class Application(tk.Frame):
    status = tk.Label

    def __init__(self, master=None):
        super().__init__(master)
        self.master = master
        self.master.minsize(400, 200)
        self.master.title("OpenBCI EMG Gaming App")
        self.pack()
        self.create_widgets()

    def create_widgets(self):
        self.status = tk.Label(self, text="Game Controls Off")
        self.status.pack(side="top", pady=10)

        self.instatiate_but = tk.Button(self)
        self.instatiate_but["text"] = "Connect to Board"
        self.instatiate_but["command"] = self.connect_to_board
        self.instatiate_but.pack(side="top", pady=50)


        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Toggle EMG Game Controls"
        self.hi_there["command"] = self.toggle_game_state
        self.hi_there.pack(side="top", pady=90)

        self.quit = tk.Button(self, text="QUIT", fg="red", command=self.master.destroy)
        self.quit.pack(side="bottom", pady=10)

    def toggle_game_state(self):
        global time_to_play_game
        time_to_play_game = not time_to_play_game
        print("Toggling Game Controls. New State == %s" % time_to_play_game)
        if time_to_play_game:
            self.status["text"] = "Game Controls On"
        else:
            self.status["text"] = "Game Controls Off"

    def connect_to_board(self):
        connect_to_brainflow_board()

    def draw(self):
        pass 

def main ():

    root = tk.Tk()
    app = Application(master=root)
    root.lift()

    # initialize calibration and time variables
    prev_time = int(round(time.time() * 1000))
    time_thres =  100
    sampling_rate = 0
    flex_thres = 0.8
    global board

    # Main App Loop
    while True:
        # Update and draw the GUI
        app.draw()
        root.update()
        if (args is not None):
            sampling_rate = BoardShim.get_sampling_rate (args.board_id)
        window = sampling_rate*5 # 5 second window   
        
        # Do the magic and control key presses if user toggles the controls button
        if (time_to_play_game and board is not None):
            data = board.get_current_board_data(window)
            DataFilter.perform_rolling_filter (data[1], 2, AggOperations.MEAN.value) # denoise data
            maximum = max(data[1])
            minimum = min(data[1])
            norm_data = (data[1,(window-(int)(sampling_rate/2)):(window-1)] - minimum) / (maximum - minimum) # normalize as many samples as needed

            if((int(round(time.time() * 1000)) - time_thres) > prev_time): # if enough time has gone by since the last flex
                prev_time = int(round(time.time() * 1000)) # update time
                for element in norm_data:
                    if(element >= flex_thres):
                        ##pyautogui.press('up') # jump
                        print("Jump! - " + ctime(time.time()));
                        break
    
    print("Stopping data stream and ending session.")
    board.stop_stream ()
    board.release_session ()

if __name__ == "__main__":
    main ()