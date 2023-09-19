#######################################
##  OpenBCI + Chrome Dino Game v3.0  ##
##  1. Get Connected                 ##
##  2. Open GUI                      ##
##  3. Adjust EMG settings           ##
##  4. Stream EMG over UDP           ##
##  5. Open chrome://dino            ##
##  6. Start running this script     ##
##  7. Win!                          ##
#######################################

import socket
import sys
import time
import signal
import json
import pyautogui
import keyboard

ip_address = "127.0.0.1"
port = 12345
emg_signal_threshold = 0.8
action_time_threshold = 220 
duration = 1000

def process_message(*args):
    try:
        #print(args[0]) #added to see raw data 
        obj = json.loads(args[0].decode())
        #print(obj.get('data'))
        #print(obj.get('data')[0])
        global prev_time
        time_threshold_exceeded = (int(round(time.time() * 1000)) - action_time_threshold) > prev_time      
        signal_threshold_exceeded = obj.get('data')[0] > emg_signal_threshold
        if (time_threshold_exceeded and signal_threshold_exceeded):
            prev_time = int(round(time.time() * 1000))
            pyautogui.press('space') # jump
            print("Jump! - " + str(prev_time))
 
    except BaseException as e:
        print(e)

# Clean exit from print mode
def exit_print(signal, frame):
    print("Closing listener")
    sys.exit(0)

if __name__ == "__main__":
    signal.signal(signal.SIGINT, exit_print)

    # Connect to socket
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_address = (ip_address, port)
    sock.bind(server_address)

    # Display socket attributes
    print('--------------------')
    print("-- UDP LISTENER -- ")
    print('--------------------')
    print("IP:", ip_address)
    print("PORT:", port)
    print('--------------------')
    print("Press 'q' to quit")

    # Receive messages
    print("Let's play!")
    start = time.time()
    global prev_time
    prev_time = int(round(time.time() * 1000))
    while time.time() <= start + duration:
        data, addr = sock.recvfrom(20000) # buffer size is 20000 bytes
        process_message(data)
        if keyboard.is_pressed("q"):
            sys.exit(0)
            break
