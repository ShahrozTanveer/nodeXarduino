var five = require('johnny-five'),
board =new five.Board(),
led,
toggleState =false;

board.on('ready', function(){
	console.log('board ready');
	led = new five.Led(13); //pin 13 on board
	setInterval(toggleLed,1000);
	function toggleLed(){
		toggleState = !toggleState; // if on change it to off and vice versa
		if(toggleState){
			led.on();
			console.log('led on!');
		}
		else{
			led.off();
			console.log('led off');
		}
	}
});
console.log('\n waiting for Board to connect....');
