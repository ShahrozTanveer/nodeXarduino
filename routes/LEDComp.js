const express = require('express');
const router = express.Router();
const led = require('../ledController').LED;
router.get('/led', (req, res) => res.render('led'));
router.get('/led/:in', (req, res) => {
    console.log(req.params.in);
    let input = req.params.in;
    if (input == 'on') {
        led.on();
        console.log("led on");
    } else if (input == 'blink') {
        led.blink();
        console.log("led blink");
    } else if (input == 'off') {
        led.off();
        console.log("led off");
    } else if (input == 'stop') {
        led.stop();
        console.log("led stop");
    } else {
        console.log("unknown input");
        //alert("unknown input");
    }
    res.render('led');
});
module.exports = router;