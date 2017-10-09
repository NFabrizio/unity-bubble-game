# unity-bubble-game

This is a simple, 2-dimensional game built in Unity. It was started by following  
the Unity for JavaScript developers tutorial on Lynda.com   (https://www.lynda.com/Unity-tutorials/Learning-Unity-JavaScript-Developers/580643-2.html).  
However, the tutorial fell far short of creating a realistic example game in Unity,  
so this repo goes several steps further. Below is a list of the differences:  
* The tutorial suggests adding a timer to destroy game objects after a certain  
  number of seconds. This repo uses a boundary to destroy game objects as soon as  
  they are out of view.  
* The tutorial sets up bubbles to spawn from the vertical center of the screen.  
  This repo sets up the bubbles to spawn near the bottom of the screen.  
* The tutorial does not implement a method to end the game. This repo adds the  
  concept of "lives". Once all the lives are gone, the game ends with the option  
  to restart.
* The tutorial implements only a single level of game play. This repo has 5 levels  
  with each level spawning bubbles in a shorter amount of time and causing the bubbles  
  to move faster.
* This repo adds a limit to the number of bubbles spawned on each level.
* This repo adds a level completion success message and a button to start the next  
  level.
* This repo persists the number of lives and score throughout each game across  
  multiple levels.
* This repo adds a "winner" message at the end of the last level, if it is  
  successfully completed.

## Installation and Set Up  
Below are the instructions for installing this application.
*These instructions are valid as of 2017.10.09*

### Environment Set Up  
1. Clone this repository to your local environment.
  1. Fork this Github repo.
    1. In a web browser, visit https://github.com/NFabrizio/unity-bubble-game
    2. Click the Fork button in the upper right corner of the screen
    3. In the "Where should we fork this repository?" pop up, select your username.
    Github should create a fork of the repo in your account
  2. Clone your fork of the unity-bubble-game repo.
    1. In the terminal on your local environment, navigate to the directory where
    you want to clone the unity-bubble-game repo  
      `cd ~/path/to/your/directory`
    2. In the terminal, run:  
      `git clone [clone-url-for-your-fork]`  
      The URL should be in the format git@github.com:YourUsername/unity-bubble-game.git
2. Open the application in Unity.

## Application Use  
This game is a simple 2-dimensional game in which bubbles spawn from random locations  
and float upward. The player must click on or tap each bubble to pop it before it  
leaves the top of the screen.  

The goal of the game is to pop all of the bubbles.  

At the beginning of the game, the player will be given three lives. A life is lost  
each time a bubble leaves the top of the screen without being popped by the player.  
The game ends when the player loses all of their lives or when all of the bubbles  
are destroyed on the final level. A level ends when the player loses all of their  
lives or when all of the bubbles are destroyed on that level.

To restart game play after the game ends, simply click the "Restart Game" button.
