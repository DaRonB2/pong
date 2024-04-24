let barHeight = 150;
let barWidth = 30;
let ballRadius = 25;
let halfBarHeight = barHeight / 2;
let speedOfBar1 = 0;
let positionOfBar1 = 220;
let speedOfBar2 = 0;
let positionOfBar2 = 220;
let topPositionOfBall = 210;
let leftPositionOfBall = 520;
let topSpeedOfBall = 0; 
let leftSpeedOfBall = 0;
let score1 = 0;
let score2 = 0;
const bar1 = document.getElementById('firstBar');
const bar2 = document.getElementById('secondBar');
let bar1Position = parseInt(window.getComputedStyle(bar1).top);
let bar2Position = parseInt(window.getComputedStyle(bar2).top);
console.log(bar1Position);
let side = {};
const winDiv = document.getElementById('winText');



function startBall() {
	topPositionOfBall = 210;
	leftPositionOfBall = 520;
	if (Math.random() < 0.5) {
		side = 1
	} else {
		side = -1
	}
	topSpeedOfBall = Math.random() * 6 + 5;
	leftSpeedOfBall = side * (Math.random() * 6 + 5);

	
};

// moving the bars up or down keys function while the key is being held
let keysPressed = {};
document.addEventListener('keydown', function (e) {
	e.preventDefault();
	keysPressed[e.key] = true;
	if (keysPressed['w']) { // W key
	let newPosition1 = bar1Position - 30;
	bar1.style.top = newPosition1 + 'px';
	bar1Position = newPosition1;
	console.log('positionNorth---', bar1Position);
	 console.log('---Key Pressed----', ' ', e.key);
    }
    if (keysPressed['s']) { // S key
		newPosition1 = bar1Position + 30;
		bar1.style.top = newPosition1 + 'px';
		bar1Position = newPosition1;
		console.log('positionSouth---', bar1Position);
		 console.log('---Key Pressed----', ' ', e.key);
	}
    if (keysPressed['ArrowUp']) { // Up key
		//  speedOfbar1 = -10;
		let newPosition2 = bar2Position - 30;
		bar2.style.top = newPosition2 + 'px';
		bar2Position = newPosition2;
		console.log('position---', bar2Position);
		 console.log('---Key Pressed----', ' ', e.key);
		}
		if (keysPressed['ArrowDown']) { // Down key
			newPosition2 = bar2Position + 30;
			bar2.style.top = newPosition2 + 'px';
			bar2Position = newPosition2;
			console.log('position---', bar1Position);
			 console.log('---Key Pressed----', ' ', e.key);
			}
	
}, false);





//stopping the bars when the key is let go

document.addEventListener('keyup', function (e) {
    e.preventDefault();
	keysPressed[e.key] = false;
	if (keysPressed['w']) { // W key
		newPosition1 = bar1Position - 0;
		bar1.style.top = newPosition1 + 'px';
		bar1Position = newPosition1;
		console.log('position---', bar1Position);
		console.log('---Key Released----', ' ', e.key);
    }
    if (keysPressed['s']) { // S key
		newPosition1 = bar1Position + 0;
		bar1.style.top = newPosition1 + 'px';
		bar1Position = newPosition1;
		console.log('position---', bar1Position);
		console.log('---Key Released----', ' ', e.key);
	}
	if (keysPressed['ArrowUp']) { // Up key
		newPosition2 = bar2Position - 0;
		bar2.style.top = newPosition2 + 'px';
		bar2Position = newPosition2;
		console.log('position---', bar2Position);
		console.log('---Key Released----', ' ', e.key);
	}
    if (keysPressed['ArrowDown']) { // Down key
		newPosition2 = bar2Position + 0;
		bar2.style.top = newPosition2 + 'px';
		bar2Position = newPosition2;
		console.log('position---', bar2Position);
		console.log('---Key Released----', ' ', e.key);
	}
}, false);

function restart() {
	score1 = 0;
	score2 = 0;
	winDiv.style.visibility = 'hidden';
	startBall();
}


function winScreen() {
	if(score1 == 10|| score2 == 10) {
		
		winDiv.style.visibility = 'visible';
		console.log(leftSpeedOfBall, topSpeedOfBall);
		leftSpeedOfBall = 0;
		topSpeedOfBall = 0;
		console.log(leftSpeedOfBall, topSpeedOfBall);
		setTimeout(restart, 4000);
		// restart();
		
	}
}
// function print() {
// 	console.log(positionOfBar1);
// }
// print();

window.setInterval(function show() {

	//stops paddles going beyond window
	positionOfBar1 += speedOfBar1;
	positionOfBar2 += speedOfBar2;

	// update ball position based on ball speed, this happens onload
	topPositionOfBall += topSpeedOfBall;
	leftPositionOfBall += leftSpeedOfBall;

// if the bar is 1px away from edge of screen stop the bar from moving beyond that point
	if (bar1Position <= 1) {
		bar1Position = 1;
	}
	if (bar2Position <= 1) {
		bar2Position = 1;
	}
	if (bar1Position >= window.innerHeight - barHeight) {
		bar1Position = window.innerHeight - barHeight;
	}
	if (bar2Position > window.innerHeight - barHeight) {
		bar2Position = window.innerHeight - barHeight;
	}
	// If it bounces off the top of the screen, the top speed will become negative and it will go in the other direction
	if (topPositionOfBall <= 10 || topPositionOfBall >= window.innerHeight - ballRadius) {
		topSpeedOfBall = -topSpeedOfBall
	}

	// reflect off bar
	if (leftPositionOfBall <= barWidth) {
		if (topPositionOfBall > bar1Position && topPositionOfBall < bar1Position + barHeight) {
			leftSpeedOfBall = -leftSpeedOfBall;
		} else {
			score2++;
			startBall();
		}
	}
	if (leftPositionOfBall >= window.innerWidth - ballRadius - barWidth) {
		if (topPositionOfBall > bar2Position && topPositionOfBall < bar2Position + barHeight) {
			leftSpeedOfBall = -leftSpeedOfBall
		} else {
			score1++
			startBall();
		}
	}
	document.getElementById("ball").style.top = (topPositionOfBall) + "px";
	document.getElementById("ball").style.left = (leftPositionOfBall) + "px";
	document.getElementById('score1').innerHTML = score1.toString();
	document.getElementById('score2').innerHTML = score2.toString();
	winScreen();
}, 1000/60);

//Play button
function play_button() {
    alert('Player1: W and S Keys | Player2: Up and Down Arrow Keys');
	alert('Game goes to 10!');
	alert('After game is over the ball will shake for 4 seconds giving the cue a new game is starting!')
}

play_button();
setTimeout(startBall, 200);
