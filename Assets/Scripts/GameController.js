#pragma strict

private var gameOver : boolean;

public var Score : int = 0;
public var ScoreDisplay : UI.Text;
public var Lives : int = 3;
public var LifeDisplay : UI.Text;
public var GameOverDisplay : UI.Text;

function Start () {
	gameOver = false;
	GameOverDisplay.text = "";
}

function Update () {
	ScoreDisplay.text = "Score: " + Score.ToString();
	LifeDisplay.text = "Lives: " + Lives.ToString();
}

public function AddPoints(howMany : int) {
    Score += howMany;
}

public function SubtractLives() {
    Lives -= 1;

    if(Lives == 0) {
	    GameOver();
    }
}

public function GameOver() {
	gameOver = true;
    GameOverDisplay.text = "Game Over";
}

public function GetGameStatus() {
	return gameOver;
}