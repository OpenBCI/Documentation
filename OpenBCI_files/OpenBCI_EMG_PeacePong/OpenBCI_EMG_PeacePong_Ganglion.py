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

import brainflow
from brainflow.board_shim import BoardShim, BrainFlowInputParams
from brainflow.data_filter import DataFilter, FilterTypes, AggOperations, WindowFunctions

import tkinter as tk

time_to_play_game = False

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

        self.hi_there = tk.Button(self)
        self.hi_there["text"] = "Toggle EMG Game Controls"
        self.hi_there["command"] = self.toggle_game_state
        self.hi_there.pack(side="top", pady=100)

        self.quit = tk.Button(self, text="QUIT", fg="red",
                              command=self.master.destroy)
        self.quit.pack(side="bottom")

    def toggle_game_state(self):
        global time_to_play_game
        time_to_play_game = not time_to_play_game
        print("Toggling Game Controls. New State == %b" % time_to_play_game)
        if time_to_play_game:
            self.status["text"] = "Game Controls On"
        else:
            self.status["text"] = "Game Controls Off"

    def draw(self):
        pass

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

    board = BoardShim (args.board_id, params)
    return board, args

def main ():

    root = tk.Tk()
    app = Application(master=root)

    result = parse_arguments()
    board = result[0]
    args = result[1]
    print("Arguments have been parsed...")

    tries = 3;
    for x in range(0, tries):
        try:
            print("Attempting to connect. Try #%d" % x)
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
    board.start_stream (45000)
    prev_time = int(round(time.time() * 1000))

    # initialize calibration and time variables
    time_thres =  100
    sampling_rate = BoardShim.get_sampling_rate (args.board_id)
    window = sampling_rate*5 # 5 second window   
    flex_thres = 0.8

    # Main App Loop
    while True:
        # Update and draw the GUI
        app.draw()
        root.update()
        
        # Do the magic and control key presses if user toggles the controls button
        if (time_to_play_game):
            data = board.get_current_board_data(window) # get data 
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

    board.stop_stream ()
    board.release_session ()

if __name__ == "__main__":
    main ()