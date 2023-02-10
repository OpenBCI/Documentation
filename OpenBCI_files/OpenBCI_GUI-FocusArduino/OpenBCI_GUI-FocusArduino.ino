////////////////////////////////////////////////////////////////////////
//            OpenBCI_GUI to Arduino via Serial: Focus                //
//                                                                    //
//    - The Arduino Built-In LED blinks when the user is Focused      //
//   https://docs.openbci.com/Tutorials/17-Arduino_Focus_Example.md   //
//   Tested 1/30/2023 using iMac, Genuine Arduino, OpenBCI_GUI 5.1.0   //
////////////////////////////////////////////////////////////////////////

const byte numChars = 32;
char receivedChars[numChars];   // an array to store the received data
String previousData = "";
boolean newData = false;

void setup() {
    Serial.begin(57600);
    pinMode(LED_BUILTIN, OUTPUT);
    Serial.println("<Arduino is ready>");
}

void loop() {
    recvWithEndMarker();
    showNewData();
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
          if (s.equals("0")) {
            Serial.println("Input: FALSE");
            digitalWrite(LED_BUILTIN, LOW);
          } else if (s.equals("1")) {
            Serial.println("Input: TRUE");
            digitalWrite(LED_BUILTIN, HIGH);
          } else {
            //Otherwise print the incoming with no action
            Serial.println("This just in ... " + s);
          }
        }
        newData = false;
        previousData = s;
    }
}
