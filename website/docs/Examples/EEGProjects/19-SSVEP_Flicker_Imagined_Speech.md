---
id: SSVEPFlickerImaginedSpeech
title: SSVEP, Flicker Frequency Measurement, and Imagined Speech with Cyton
---

:::note Community project - not validated by OpenBCI
**Credit:** This project, its software, and the research behind it are the work of **Janis Peksa** (Institute of Information Technology, Riga Technical University) and **Luigi Bianchi** (University of Rome Tor Vergata). It is described in their paper [Reproducible EEG-BCI Experiments: Frame-Confirmed Timing and Physical SSVEP Validation](https://www.mdpi.com/1424-8220/26/21/7065), and the code is in the authors' [github.com/JanisPeksa/BCI](https://github.com/JanisPeksa/BCI) repository. All code, configurations, and images referenced here belong to their authors.

**OpenBCI has not validated this project end to end.** This page is a guide to a third-party project and is provided **"as-is"**. For questions about the software, please contact the authors.
:::

This project includes software for two kinds of EEG experiments, using a [Cyton board](Cyton/01-CytonBoard.md) and the [Ultracortex Mark IV](AddOns/Headwear/01-Ultracortex-Mark-IV.md) headset:

- **SSVEP (steady-state visual evoked potentials)** - flickering squares on a monitor, each at its own frequency. When you look at one, your visual cortex responds at that frequency. The software records the session, trains a classifier for each participant, and runs a live verification session.
  - _Optional:_ a tool to **measure the flicker frequency** with an **Arduino and a photoresistor**, to check that the monitor really flickers at the frequencies you set.
- **Imagined speech** - the participant hears a phoneme, imagines saying it, and then says it out loud while EEG is recorded. This part records data only. It does not include any analysis or decoding.

For every session, the software saves:

- **The exact configuration** - the stimuli, their frequencies, the timing, and the electrodes used.
- **The planned trial order** - so you know which stimulus the participant was shown in each trial.
- **When each stimulus was sent to the screen** - the moment the first frame showing it was passed to the monitor, not just when the software asked for it.
- **The raw EEG** - the unprocessed signal from the Cyton.

## What's in the repository

The [authors' repository](https://github.com/JanisPeksa/BCI) has four main folders:

| Folder | What it contains | On this page |
|---|---|---|
| [`ssvep-bci`](https://github.com/JanisPeksa/BCI/tree/main/ssvep-bci) | The SSVEP app. It shows the flickering stimuli, records EEG, and classifies live. Its `notebooks` folder has Jupyter analyses for 3, 4, and 6 frequencies and for different window lengths. | [Part 1](#part-1---ssvep-experiment) |
| [`ssvep-frequency-test`](https://github.com/JanisPeksa/BCI/tree/main/ssvep-frequency-test) | An Arduino light sensor sketch and analysis scripts, to check that the monitor really flickers at the frequencies you set. | [Part 2](#part-2---check-the-monitors-real-flicker-frequency-optional) |
| [`imagined-speech-psychopy`](https://github.com/JanisPeksa/BCI/tree/main/imagined-speech-psychopy) | The imagined speech app: an operator console and a participant screen, for protocols such as the four-phoneme one (/p/, /m/, /i/, /u/). It records data only. | [Part 3](#part-3---imagined-speech-recording) |
| [`docs`](https://github.com/JanisPeksa/BCI/tree/main/docs) | The authors' step-by-step guides for each experiment ([SSVEP](https://github.com/JanisPeksa/BCI/blob/main/docs/SSVEP_EXPERIMENT.md) and [imagined speech](https://github.com/JanisPeksa/BCI/blob/main/docs/IMAGINED_SPEECH_EXPERIMENT.md)), with screenshots. | Linked throughout |

The repository also includes the paper as a PDF.

## What do I need?

**Hardware**

- An OpenBCI [Cyton Board](https://shop.openbci.com/products/cyton-biosensing-board-8-channel) and its USB dongle. For the 16-channel imagined speech setup, a Cyton with the [Daisy module](https://shop.openbci.com/products/cyton-daisy-biosensing-boards-16-channel).
- An [Ultracortex Mark IV](https://shop.openbci.com/products/ultracortex-mark-iv) headset (the setup the authors used)
- A computer monitor. The authors tested a 2560 × 1440 monitor at 59 Hz on Windows 10 with an NVIDIA GPU.
- _(Optional, for frequency validation)_ An Arduino Uno, a photoresistor, a resistor, and opaque tape
- _(Optional, for imagined speech)_ A micro SD card for the Cyton, to record all 16 channels at 250 Hz on the board ([SD card guide](Cyton/09-Using_SD_Card_with_OpenBCI.md))

**Software**

- Python 3.11. The imagined speech app requires Python 3.11 and 64-bit Windows.
- The [author's repository](https://github.com/JanisPeksa/BCI). It uses [BrainFlow](https://brainflow.readthedocs.io/en/stable/) to talk to the Cyton, PySide6 for the SSVEP stimuli, and [PsychoPy](https://www.psychopy.org/) for the imagined speech display. It can also read from [LSL](Software/CompatibleThirdPartySoftware/04-LSL.md).
- The [Arduino IDE](https://www.arduino.cc/en/software), if you will validate the stimulus frequency

## Video Tutorials

The authors recorded two videos, hosted on Google Drive:

- [Introduction to the headset and tips for using it](https://drive.google.com/file/d/1C7fjaKmNK-WvdIHksHm9JWzIPXmYcgSW/view?usp=drive_link) (about 4 minutes) - watch this before setting up the Ultracortex.
- [Running the four-phoneme imagined speech experiment](https://drive.google.com/file/d/1CoksXDZ_rzcgFaDU7lEx_8lfJUg__RWg/view?usp=drive_link)

## How it works

1. **Configure** - Each experiment is defined in a YAML file: the stimuli, their frequencies, the timing, the number of trials, and the device. The software checks the file before anything runs. For example, it rejects flicker frequencies at or above half of your monitor's refresh rate. The YAML files are in the authors' repository, in two folders for each app:
   - **Experiment files** - the stimuli, timing, and number of trials. SSVEP: [`ssvep-bci/src/ssvep_bci/resources/configs/`](https://github.com/JanisPeksa/BCI/tree/main/ssvep-bci/src/ssvep_bci/resources/configs). Imagined speech: [`imagined-speech-psychopy/src/imagined_speech/resources/configs/`](https://github.com/JanisPeksa/BCI/tree/main/imagined-speech-psychopy/src/imagined_speech/resources/configs).
   - **Device files** - the board, electrode positions, reference, and sample rate. They are in the `devices` folder next to `configs` in each app. Each experiment file names the device file it uses.

   When a command uses `--config four-frequency-fbtdca`, the app loads the file with that name from the SSVEP `configs` folder. To change an SSVEP experiment, copy one of these files, edit the copy, and pass its path to `--config`. The device file is named by a path relative to the experiment file (for example `../devices/cyton.yaml`), so update that path if you save the copy in another folder. In the imagined speech app, you choose the files on the setup screen instead.
2. **Plan** - The configuration is compiled into a fixed session plan. Random trial order comes from a seed stored in the configuration, so the same configuration always produces the same plan.
3. **Present and confirm** - While a stimulus is shown, the app does not just record when it _asked_ for the stimulus. It waits until the first frame showing the stimulus is passed to the monitor and timestamps that moment. The paper calls these **frame-confirmed** events. The monitor can still take a little longer to show the image, which is why the optional photoresistor check measures the light it actually emits.
4. **Acquire** - BrainFlow streams EEG from the Cyton in a separate process. Every sample is saved raw with its timestamps, in the same clock as the stimulus events.
5. **Validate** - After a session, a validation command checks that the saved session is complete and consistent.
6. **Check the physical stimulus** _(optional)_ - A photoresistor taped to the screen measures the light the monitor really emits. A script compares the measured flicker frequency against the configured one.

## Part 1 - SSVEP experiment

Start here even if you are mainly interested in imagined speech. The authors recommend running the SSVEP workflow first, because it is the only one with a complete path from recording to a validated result. It teaches you how to set up the hardware, run a session, and check your data.

### Step 1 - Get the code and install

Clone the repository. The commands below assume a terminal open in the cloned `BCI` folder.

```bash
git clone https://github.com/JanisPeksa/BCI.git
cd BCI
```

Create a virtual environment and install the SSVEP app. On Windows (PowerShell):

```powershell
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install -e ".\ssvep-bci[all]"
```

On Linux:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e "./ssvep-bci[all]"
```

On Linux you may also need permission to open the Cyton dongle's serial port. Add yourself to the `dialout` group, then log out and back in:

```bash
sudo usermod -aG dialout "$USER"
```

The [`ssvep-bci` README](https://github.com/JanisPeksa/BCI/blob/main/ssvep-bci/README.md) has the full instructions, including how to run without activating the environment.

The paper's results were produced with the tag `bci-reproducibility-paper-v1.0.0-rc2`. The repository may have changed since. To use exactly that version, run `git checkout bci-reproducibility-paper-v1.0.0-rc2` after cloning.


:::tip Try it without hardware
Before connecting the Cyton, you can test the SSVEP app with simulated EEG. The default configuration uses a simulated device, so these commands need no board or headset:

```bash
ssvep-bci validate
ssvep-bci run --participant TEST001 --windowed
```

The first command checks the default configuration. The second runs an experiment in a window, with simulated EEG, and saves a session folder like a real recording would. Use it to check that the stimuli display correctly and to see what a session contains.
:::

### Step 2 - Set up the headset

The SSVEP device profile uses eight electrodes over the back of the head, where the visual cortex is:

| Cyton channel | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Position | O1 | O2 | Oz | PO3 | PO4 | P3 | P4 | Pz |

You also need a reference and a ground (bias) electrode:

| Electrode | Where on the head | Where on the Cyton |
|---|---|---|
| Reference | Linked mastoids: one electrode on the bony area behind each ear, both connected to the same pin | Bottom SRB pin (SRB2) |
| Ground (bias) | Not stated by the authors. The Mark IV kit uses an ear clip electrode. | BIAS pin |

The Cyton samples at 250 Hz.

Check electrode contact before every session. See the [Ultracortex Mark IV guide](AddOns/Headwear/01-Ultracortex-Mark-IV.md) for assembly, and the authors' [headset video](https://drive.google.com/file/d/1C7fjaKmNK-WvdIHksHm9JWzIPXmYcgSW/view?usp=drive_link) for tips.

The device profile uses `serial_port: auto`, which only works when the Cyton dongle is the **only** FTDI/OpenBCI serial device plugged into the computer. Close the OpenBCI GUI before running the app, because only one program can use the dongle's port at a time.

### Step 3 - Validate the configuration

The `four-frequency-fbtdca` profile shows four 200 × 200 pixel squares flickering at **8, 9, 13, and 14 Hz** at the same time. A red outline tells the participant which square to look at. The profile records 12 trials per frequency.

Check the configuration before connecting the participant:

```bash
ssvep-bci validate --config four-frequency-fbtdca
```

### Step 4 - Record two training sessions

Record at least **two complete sessions** with the same participant. Two are needed because the model is validated by training on one session and testing on the other. Use a new session label each time:

```bash
ssvep-bci run --config four-frequency-fbtdca --participant P012 --session-label fbtdca-run-1
ssvep-bci run --config four-frequency-fbtdca --participant P012 --session-label fbtdca-run-2
```

During the session, the participant looks at the red-outlined square while all four squares flicker, and rests during the breaks. Sessions are saved under `ssvep-bci/sessions/`.

After each session, check that it was saved correctly:

```bash
ssvep-bci validate-session "./ssvep-bci/sessions/<session-folder>"
```

### Step 5 - Train the model

The authors use **FBTDCA** (filter-bank task-discriminant component analysis), a classifier commonly used for SSVEP. Install the training dependencies and open the notebook:

```bash
python -m pip install -e "./ssvep-bci[training]"
jupyter lab "./ssvep-bci/notebooks/four_frequency_fbtdca.ipynb"
```

Set `PARTICIPANT_ID` to your participant (for example `P012`) and run all the cells. For every trial, the notebook takes a 3.5-second EEG window starting 0.25 seconds after the frame-confirmed stimulus onset. It trains on one session, tests on the other, and saves the model and a summary under `ssvep-bci/models/<participant>/`. Review the summary's accuracy before moving on.

:::caution Keep your settings fixed
A model only works with sessions recorded using the same frequencies (in the same order), channel order, sampling rate, stimulus timing, and notch filter settings. Don't change the configuration between collection, training, and verification.
:::

### Step 6 - Run online verification

Run a live session using the model you just trained:

```bash
ssvep-bci verify --config four-frequency-fbtdca --model "./ssvep-bci/models/P012/four_frequency_fbtdca.joblib" --participant P012 --session-label fbtdca-verification
```

The participant does the same task as before. Between trials, a scorecard shows how the model is doing; it is hidden while the squares flicker. When the session ends, `verification-summary.json` contains the overall and balanced accuracy, the confusion matrix, per-class results, and processing latency.

The repository also includes a six-frequency profile (`six-frequency-fbtdca`, 8-10 Hz and 13-15 Hz) and shorter-window variants. See the [`ssvep-bci` README](https://github.com/JanisPeksa/BCI/blob/main/ssvep-bci/README.md).

## Part 2 - Check the monitor's real flicker frequency (optional)

Your monitor, graphics driver, and computer load can all make the real flicker differ from what you configured. This optional check measures the light the screen actually emits. It is the "physical SSVEP validation" in the paper's title, and it is worth repeating whenever you change the monitor, resolution, refresh rate, or stimulus configuration.

1. **Install the tool** from the `BCI` folder:

   ```bash
   python -m pip install -e "./ssvep-frequency-test"
   ```

2. **Build the sensor.** Upload [`arduino_light_sensor_sketch.ino`](https://github.com/JanisPeksa/BCI/blob/main/ssvep-frequency-test/arduino_light_sensor_sketch/arduino_light_sensor_sketch.ino) to the Arduino. The sketch reads the photoresistor on pin **A0** 400 times per second and sends the readings over serial at 115200 baud. The authors' [wiring diagram](https://github.com/JanisPeksa/BCI/blob/main/docs/images/frequency_validation_scheme.jpg) shows the circuit.
3. **Mount the sensor.** The validation profile shows a single 400 × 400 pixel square in the bottom-right corner of the screen. Tape the photoresistor directly over it, and cover it with opaque tape so room light can't reach it ([photo of the authors' setup](https://github.com/JanisPeksa/BCI/blob/main/docs/images/frequency_validation.jpg)).
4. **Record.** Open two terminals in the `BCI` folder. In the first, start the recorder, using your Arduino's port (for example `COM3` on Windows or `/dev/ttyACM0` on Linux):

   ```bash
   ssvep-frequency-validation record --port COM3
   ```

   In the second, run the validation stimulus. It shows a 12.75 Hz square twice, for ten seconds each time:

   ```bash
   ssvep-frequency-validation run ssvep-bci --participant MONITOR_TEST
   ```

   When the stimulus finishes, stop the recorder with `Ctrl+C`.

5. **Analyze:**

   ```bash
   ssvep-frequency-validation analyze ssvep-bci
   ```

The results are saved in the session's `photosensor-check` folder. In `summary.csv`, each trial gets a **PASS** if the measured frequency is within **±0.25 Hz** of the target. Also look at `time_domain.png`: a frequency can pass while individual flashes are still irregular, so the authors treat frequency accuracy and flash timing as separate checks. If the signal is flat, saturated, or noisy, improve the shielding and sensor placement and repeat the measurement.

The recorder and the SSVEP app must run on the same computer, so the light recording can be lined up with the session's stimulus events.

## Part 3 - Imagined speech recording

:::caution Recording only
This app records imagined speech EEG and its markers. It **does not include any processing or decoding**, and the paper did not evaluate it. Treat its output as raw research data that you will need to analyze with your own pipeline.
:::

### Hardware setup

The authors record imagined speech with a 16-channel setup (device file `cyton_16ch.yaml`):

| Setup | Electrode positions | Reference | Live stream rate |
|---|---|---|---|
| Cyton + Daisy, 16 channels | Fp1, Fp2, C3, C4, P7, P8, O1, O2, F7, F8, F3, F4, T7, T8, P3, P4 | Ear clips on both ears, linked together and connected to the SRB2 pin | 125 Hz |

This setup uses ear clips instead of the linked mastoids used for SSVEP in [Part 1](#step-2---set-up-the-headset). The ground (bias) connects to the Cyton's BIAS pin. The authors don't say where they place the ground electrode on the head.

The Cyton + Daisy streams at 125 Hz because the radio link has to carry twice as many channels (see [How products go together](FAQ/02-HowProductsGoTogether.md)). With a micro SD card in the Cyton, the board can also record all 16 channels at 250 Hz. You get that file after the session, and you must line it up with the experiment's markers yourself. The authors record with both: the 125 Hz live stream and the 250 Hz SD card file.

### Install and run

On 64-bit Windows with Python 3.11:

```powershell
cd imagined-speech-psychopy
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e ".[all]"
imagined-speech-psychopy run
```

This opens the operator console. On the setup screen:

1. Choose the protocol `cyton-four-phoneme.yaml` and the device profile `cyton_16ch.yaml`. To record to the SD card, turn it on in the device configuration.
2. Enter the participant ID and a session label.
3. If you use two monitors, choose which one the participant sees.
4. Check the audio plays on the participant's display, then tick **Audio output and volume checked**.
5. Fix any warnings in the preview, then press **Create session**.

Press **Init subject UI** to open the participant's PsychoPy display, then **Start protocol**. A practice block runs first and is not recorded. After it, press **Start experiment**.

### Each trial

The protocol uses four phonemes: /p/, /m/, /i/, and /u/. Each trial follows the same sequence:

1. **Fixation** - the participant looks at a cross.
2. **Stimulus** - they hear the phoneme five times.
3. **Thinking** - they imagine saying it five times, without moving.
4. **Speaking** - they say it out loud five times, at the same rhythm.
5. **Rest**

While it runs, the operator console shows live EEG, channel status, recent markers, and acquisition health. The operator can pause, repeat a trial or block, note an electrode adjustment, or abort.

### After the session

Validate the saved session:

```powershell
imagined-speech-psychopy validate-session <path-to-session-folder>
```

If you recorded to the SD card, stop the recording, copy the file, and line it up with the experiment markers for offline analysis. The authors' [imagined speech guide](https://github.com/JanisPeksa/BCI/blob/main/docs/IMAGINED_SPEECH_EXPERIMENT.md) covers every screen in detail, with screenshots.

## What the paper tested

The paper reports results for the SSVEP software and the monitor check, **not** for EEG decoding:

- All 61 automated software tests passed for the released version.
- Across three sweeps from 8 to 15 Hz, all 48 valid optical measurements were within ±0.25 Hz of the target. The average error was about 0.03 Hz.
- With a 12.75 Hz stimulus, adding three other flickering squares on screen did not reduce frequency accuracy.
- Some individual flashes were irregular, especially at 13-14 Hz. A correct overall frequency does not guarantee perfectly regular timing.

The authors state these limits:

- The optical tests used simulated EEG data, not a Cyton. The paper does **not** measure the delay between a stimulus and the matching EEG sample, or data loss over the Cyton's wireless link.
- The results come from one computer, one monitor, and one sensor setup. They may differ on your hardware.
- The paper reports no participant SSVEP accuracy and no imagined speech results.
