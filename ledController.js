//"use strict";
var five = require('johnny-five'),
    express = require('express'),
    expressLayouts = require('express-ejs-layouts'),
    app = express(),
    board = new five.Board(),
    led = null,
    port = process.env.PORT || 8000,
    flag = false;

board.on('ready', function() {
    console.log('board ready');
    led = new five.Led(13); //pin 13 on board
    exports.LED = led;
    flag = true;
    app.use(expressLayouts);
    app.set('view engine', 'ejs');
    app.use('/', require('./routes/index'));
    app.use('/LEDComp', require('./routes/LEDComp'));
    app.listen(port, console.log(`APP IS RUNNING ON PORT: ${port}`));
});
if (!flag) {
    console.log("waiting for device to connect....");
}