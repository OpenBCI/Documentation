---
id: SoftwareDevelopment
title: Software Development
---
# Overview

Welcome all Software Developers! In this document, we will go over the tools available to assist in integrating OpenBCI hardware with projects in multiple programming languages. Also, we will briefly look at how OpenBCI hardware is integrated into the OpenBCI GUI using [Processing](https://en.wikipedia.org/wiki/Processing_(programming_language)).

## Introducing BrainFlow

Prior to version 5.0, the OpenBCI GUI relied on a Node.js Electron app to handle communications as middleware via TCP/IP on Mac, Linux, and Windows machines. This required users to allow a separate app to run in the background. At the same time, there are many users who just want to use OpenBCI hardware with Python, C++, or C#. The OpenBCI Community needed a solution, and we found one: [BrainFlow](https://brainflow.readthedocs.io/en/stable/index.html)!

BrainFlow is written in C++ and then exported to a handful of languages. This cuts down on development time, and provides a centralized repository for OpenBCI drivers that are more accessible and accommodating.

[BrainFlow Documentation](https://brainflow.readthedocs.io/en/stable/index.html)!

## Initial Setups and Testing

GUI v5.0+ uses the BrainFlow-Java package. When starting a new project with OpenBCI hardware for the first time, it is important to check that you can connect the hardware properly, [depending on your biosensing setup](ForDevelopersLanding#biosensing-setups). 

We recommend using the GUI to start your project and check signals before moving towards full integration. Furthermore, we recommend using the GUI's Networking Widget to stream data for proof-of-concept via UDP, LSL, OSC, or Serial. This allows you to visualize real-time and playback data in the GUI while modifying your application in a separate IDE.

Once proof-of-concept is achieved, it's appopriate to consider integrating the OpenBCI board directly into your project using one of the BrainFlow bindings, found below. The GUI can still be used at any time to check signals, make recordings, and stream live data.

## Supported Boards

-   [Supported Boards and Parameters](https://brainflow.readthedocs.io/en/stable/SupportedBoards.html#supported-boards) (_important_)

## BrainFlow - C++

-   [Compilation of Core BrainFlow Module and C++ Binding](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#compilation-of-core-module-and-c-binding)
-   [C++ API Reference](https://brainflow.readthedocs.io/en/stable/UserAPI.html#c-api-reference)
-   [C++ Code Samples](https://brainflow.readthedocs.io/en/stable/Examples.html#id1)

## BrainFlow - Python

-   [Install Python Binding](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#python)
-   [Python API Reference](https://brainflow.readthedocs.io/en/stable/UserAPI.html#python-api-reference)
-   [Python Code Samples](https://brainflow.readthedocs.io/en/stable/Examples.html#python)

## BrainFlow - C#

-   [Install C# Binding](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#c)
-   [C# API Reference](https://brainflow.readthedocs.io/en/stable/UserAPI.html#id1)
-   [C# Code Samples](https://brainflow.readthedocs.io/en/stable/Examples.html#c)

## BrainFlow - Java

-   [Install Java Binding](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#java)
-   [Java API Reference](https://brainflow.readthedocs.io/en/stable/UserAPI.html#java-api-reference)
-   [Java Code Samples](https://brainflow.readthedocs.io/en/stable/Examples.html#java)

## BrainFlow - R

-   [Install R Binding](https://brainflow.readthedocs.io/en/stable/BuildBrainFlow.html#r)
-   [R API Reference](https://brainflow.readthedocs.io/en/stable/UserAPI.html#r-api-reference)
-   [R Code Samples](https://brainflow.readthedocs.io/en/stable/Examples.html#r)

## Notebooks

-   [BrainFlow to MNE Python Notebook](https://brainflow.readthedocs.io/en/stable/notebooks/brainflow_mne.html)
-   [Denoising Notebook](https://brainflow.readthedocs.io/en/stable/notebooks/denoising.html)

* * *

## OpenBCI GUI Overview

-   [GUI How-to and Installation](Software/01-OpenBCISoftware/01-OpenBCI_GUI.md)
-   The [GUI Widget Guide](Software/01-OpenBCISoftware/GUIWidgets) provides details on each "widget" within the GUI, such as the [Time Series Widget](Software/01-OpenBCISoftware/GUIWidgets#time-series) and the [Networking Widget](Software/01-OpenBCISoftware/GUIWidgets#networking)
-   [GUI Changelog](https://github.com/OpenBCI/OpenBCI_GUI/blob/master/CHANGELOG.md)

## BrainFlow Java Binding and OpenBCI GUI

This project is currently in Alpha testing, more information will be available after the stable GUI version 5.0 has been released.
