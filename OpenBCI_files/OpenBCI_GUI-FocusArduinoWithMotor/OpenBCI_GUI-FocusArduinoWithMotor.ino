/////////////////////////////////////////////////////////////////////////////////////////
//            OpenBCI_GUI to Arduino via Serial: Focus w/ Motor                        //
//                                                                                     //
//            - The Arduino Built-In LED blinks when the user is Focused               //
//            - Potentiometer controls motor speed                                     //
//            - Button on pin 7 reverses motor direction while pressed                 //
//                                                                                     //
//          Tested 7/27/2019 using iMac, Genuine Arduino, OpenBCI_GUI 4.1.3            //
//    Uses https://learn.adafruit.com/adafruit-arduino-lesson-15-dc-motor-reversing/   //
//        and https://docs.openbci.com/Tutorials/17-Arduino_Focus_Example              //
/////////////////////////////////////////////////////////////////////////////////////////

const byte numChars = 32;
char receivedChars[numChars];   // an array to store the received data
String previousData = "";
boolean newData = false;
boolean isFocused = false;

int enablePin = 11;
int in1Pin = 10;
int in2Pin = 9;
int switchPin = 7;
int potPin = 0;

void setup() {
    pinMode(in1Pin, OUTPUT);
    pinMode(in2Pin, OUTPUT);
    pinMode(enablePin, OUTPUT);
    pinMode(switchPin, INPUT_PULLUP);

    Serial.begin(57600);
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.println("<Arduino is ready>");
}

void loop() {
    recvWithEndMarker();
    showNewData();
    
    int speed = analogRead(potPin) / 4;
    boolean reverse = digitalRead(switchPin);
    if (isFocused) {
      setMotor(speed, reverse);
    } else {
      setMotor(0, reverse);
    }
}

//Recieve data and look for the endMarker '\n' (new line)
void recvWithEndMarker() {
    static byte ndx = 0;
    char endMarker = '\n';
    char rc;
    
    while (Serial.available() > 0 && newData == false) {
        rc = Serial.read();

        if (rc != endMarker) {
            receivedChars[ndx] = rc;
            ndx++;
            if (ndx >= numChars) {
                ndx = numChars - 1;
            }
        }
        else {
            receivedChars[ndx] = '\0'; // terminate the string
            ndx = 0;
            newData = true;
        }
    }
}

void showNewData() {
    if (newData == true) {
        //Convert char array into string
        String s = receivedChars;
        //Only perform an action when the incoming data changes
        if (!s.equals(previousData)) {
          //Check if the string is "true" or "false"
          if (s.equals("false")) {
            Serial.println("Input: FALSE");
            isFocused = false;
            digitalWrite(LED_BUILTIN, LOW);
          } else if (s.equals("true")) {
            Serial.println("Input: TRUE");
            digitalWrite(LED_BUILTIN, HIGH);
            isFocused = true;
          } else {
            //Otherwise print the incoming with no action
            Serial.println("This just in ... " + s);
          }
        }
        newData = false;
        previousData = s;
    }
}

void setMotor(int speed, boolean reverse) {
    analogWrite(enablePin, speed);
    digitalWrite(in1Pin, !reverse);
    digitalWrite(in2Pin, reverse);
}
