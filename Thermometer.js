//"use strict";
var five = require('johnny-five'),
    //express = require('express'),
    // expressLayouts = require('express-ejs-layouts'),
    // app = express(),
    board = new five.Board(),
    led = null,
    thermometer = null,
    //port = process.env.PORT || 8000,
    flag = false;

board.on('ready', function() {
    console.log('board ready');
    led = new five.Led(13); //pin 13 on board
    led.off();
    thermometer = new five.Thermometer({
        controller: "LM35",
        pin: "A0"
    });

    flag = true;
    //thermometer.enable();
    thermometer.on("change", function() {
        console.log("celsius: %d", this.C);
        //console.log("fahrenheit: %d", this.F);
        //console.log("kelvin: %d", this.K);
    });
    //thermometer.disable();
    // thermometer.off();
    // app.use(expressLayouts);
    //app.set('view engine', 'ejs');
    //app.use('/', require('./routes/index'));
    // app.use('/LEDComp', require('./routes/LEDComp'));
    //app.listen(port, console.log(`APP IS RUNNING ON PORT: ${port}`));
});
if (!flag) {
    console.log("waiting for device to connect....");
}