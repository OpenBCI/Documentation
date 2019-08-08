---
id: VirtualBoxDep
title: VirtualBox Windows 7 Guide
---

Some of the software compatible with OpenBCI products requires a Windows operating system. If you have a non-windows computer, you can still use this software through a Windows virtual machine on VirtualBox.

## Installing Windows 7 VM in VirtualBox

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/ova-set.jpg?raw=true" width="75%">

1. Download [VirtualBox](https://www.virtualbox.org/wiki/Downloads).
2. Go to <https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/> and download a Windows 7 virtual machine (I used IE8) image for your appropriate host on the "Choose your OS" tab. (The OS that your computer runs natively). Choosing Virtual Box as the platform.
3. Extract and double click on the .OVA file resulting from the extraction. This should start Virtual Box and set up your VM's configurations.
4. Some EEG processing software uses a lot of RAM (OpenViBE aquisition server for example). In fact, some will take up one entire core, if they can. Because of this, I would advise that you configure your VM to have multiple cores and as much RAM as you deem reasonable.
5. Import the VM, go through all the configs and start it.
6. For more detailed instructions/tutorials and troubleshooting see the [Windows Manual](https://az792536.vo.msecnd.net/vms/release_notes_license_terms_8_1_15.pdf). (If you selected a different distribution other than Win 7, see the respective manual in the Windows page.)
7. Follow the [OpenBCI on Windows](09Deprecated/08-OpenBCI_on_Windows.md) tutorial to properly connect your OBCI board on Windows.

NOTE: Make sure that Guest Additions are installed correctly on your VM. With the image used, they should be automatically installed.

## Sharing files with VirtualBox

If you have files on your regular OS that you'd like to access through VirtualBox, follow these steps to create a shared folder:

1. Start VirtualBox. When the "Oracle VM VirtualBox Manager" window appears, select your virtual machine (so that it's highlighted in blue). Make sure your virtual machine is in the "powered off" mode, and not the "saved state" mode.
2. Click Settings and then the "Shared Folders" tab.
3. Click the icon for "Add new shared folder", and select the file path to a folder you'd like to share.
4. Start your virtual machine.
5. Open a file explorer window and navigate to the "Network" location.
6. You may need to select "Turn on network and file sharing" as an administrator. Then, a computer called "VBOXSVR" will appear.
7. Double click on that computer and you should see your shared folder.

You're all set! For more information, look at the [VirtualBox documentation.](https://www.virtualbox.org/wiki/Documentation)

## Using OpenBCI Hardware within VirtualBox

While using 3rd party software, you might want to stream data from your OpenBCI board directly to a program on your virtual machine. Here's how to livestream from your OpenBCI board within your VM.

**OpenBCI Cyton Board**

1. Make sure you're comfortable using your Cyton board and Dongle with your host computer and the OpenBCI GUI. To do so, check out our [Cyton Getting Started Guide](01GettingStarted/01-Boards/01-Cyton_Getting_Started_Guide.md).
2. Plug in your Dongle and turn on your Cyton board. Both should display a blue light.
3. Start VirtualBox. When the "Oracle VM VirtualBox Manager" window appears, select your virtual machine (so that it's highlighted in blue). Make sure your virtual machine is in the "powered off" mode, and not the "saved state" mode.
4. Click Settings and then the Ports tab.
5. Switch to the USB tab.
6. Check "Enable USB Controller" and select "USB 2.0 (EHCL) Controller".
7. Under USB Device Filters, click the "Add USB" icon with the green plus sign. The FTDI Driver used by the OpenBCI Dongle should appear in a drop down menu. Select it. It should now appear under "USB Device Filters".

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/VM_tutorial/VirtualBox_enable_usb.png?raw=true" width="70%">

8. Click "OK" to save these settings. Make sure no other program that connects to your Dongle (like the OpenBCI GUI) is currently running. Start your virtual machine.
9. From within your virtual machine, open the control panel, then navigate to Hardware and Sound -> Device Manager.
10. You should see the FT USB driver under "Other devices". It may have a warning indicator next to it. Double-click the driver name.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/VM_tutorial/VM_deviceManager_beforeinstallation.png?raw=true" width="70%">

11. Doing so should open a "Properties" page. Go to the "General" tab and select "Update Driver..."

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/VM_tutorial/VM_FT23_driver_properties.png?raw=true" width="50%">

12. Select "Search automatically for updated driver software" when prompted.
13. Wait for your your VM OS to search for and download the driver software. You will be prompted when the driver software is downloaded successfully.
14. Now, in the Device Manager, there should be an object under "Universal Serial Bus controllers" called "USB Serial Converter". There should also be a "Ports" tab with at least one device.

<img src="https://github.com/OpenBCI/Docs/blob/master/assets/images/VM_tutorial/VM_tutorial_COM_port.png?raw=true" width="70%">

15. The device listed under "Ports" is your OpenBCI Dongle, and the address in parenthesis is its COM Port. In the example above, the OpenBCI Dongle is on COM Port 3.

You should now be able to communicate with your OpenBCI Dongle and board from within your VM! Have more questions? Post them on our [Forum.](http://openbci.com/index.php/forum/)
