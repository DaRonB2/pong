**PONG**

SEBPT220 Project 1 PONG!
Compared to Ping-Pong and Air Hockey!
To play pong online go to https://daronb2.github.io/pong/


**HOW TO PLAY**

Move your paddles up and down to keep the ping pong ball from falling through on your side! This is a 2 player game with player one using keys "W" + "S" and player two will be using the UP Arrow + Down Arrow. The paddles only move vertically and will go off the page for 1 px only. To move the paddles you will need to hold down the key and once you release the paddles will stop. As the game goes the ping pong ball will move faster and the bar will stay moving at 30px per key press so think ahead or you will fall behind in the score. If the ball goes on a player's side and they can not make contact to the ball with their paddle, a point will be rewarded to the other player.The winner will be crowned once a player reaches 10 points. Pay attention because 10 points will sneak up on you and you will lose before you know it. Good Luck and Have Fun!

**How To Install**

1. Fork and clone this repo!
2. Open the index.html file to play anytime you want!

**How It Works**

<img width="980" alt="Screenshot 2024-04-23 at 5 22 40 PM" src="https://github.com/DaRonB2/pong/assets/160679308/b611a1e5-c350-4a46-9202-330e3ccc7060">
This is my basic html where I have the divs set-up for my bars and the ping-pong ball. I linked in the font I used for the winner screen in my html as well as my css and javascript pages. There is not much on this page but it holds every piece of the game from the score to the canvas for the game.

<img width="980" alt="Screenshot 2024-04-23 at 5 21 58 PM" src="https://github.com/DaRonB2/pong/assets/160679308/b186d563-3378-4335-ba43-f8ec9570d71a">
In this view of our code we have 3 sets of if functions for 3 different purposes. The first is checking the positioning of the paddles to see if they are within 1px of the borders to the screen. If they are, it will stop all movement in that direction for the paddle. 

In the second set, we have to make sure the ball doesn't fly off the screen so we are checking if the ball is at the top or bottom of the screen and if so the position of the ball will go the opposite of a positive or negative positioning. 

Lastly we have some functions to make the ball bounces of the paddles if they come in contact. If the ball is anywhere on the edge of the paddle it will be reflected off and the game will continue on. If not, the score will be upadted +1 to the player who scored and a new ball will appear with the startBall() function.

<img width="613" alt="Screenshot 2024-04-23 at 5 20 48 PM" src="https://github.com/DaRonB2/pong/assets/160679308/184b5aae-ab07-4072-b748-3858f74db282">
The last view of our code shows the keydown function for our game. We had to add an window event listner to make movement happen when an user clicks down one of the keys involved in the game. If a key is pressed the paddles will either move up or down by 30px at a time based on the key pressed. Once the key is released the bar will stop all movement until a key is pressed again.

**WireFrames**

![IMG_0983 (1)](https://github.com/DaRonB2/pong/assets/160679308/f88cd0b1-4038-4942-928d-a2784a1d35a5)
![IMG_0984 (1)](https://github.com/DaRonB2/pong/assets/160679308/6475c8b3-05b6-441b-9515-9aedeb205c30)
