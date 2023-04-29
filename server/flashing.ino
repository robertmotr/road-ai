#define LED 2 // define the LED bulb
#define L 4 // define the LED bulb
void setup() {
  pinMode(LED,OUTPUT); //Set the LED pin as output pin
  pinMode(L,OUTPUT); //Set the LED pin as output pin
}

void loop() {
  digitalWrite(LED,HIGH); // LED bulb on
  digitalWrite(L,LOW); // LED bulb on
  delay(100); // delay time
  digitalWrite(LED,LOW); // LED off
  digitalWrite(L,HIGH); // LED off
  delay(100); //delay time
}
