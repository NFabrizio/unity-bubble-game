#pragma strict

import UnityEngine.SceneManagement;

private var gameOver : boolean;
private var gameRestart : boolean;

public var Score : int = 0;
public var ScoreDisplay : UI.Text;
public var Lives : int = 3;
public var LifeDisplay : UI.Text;
public var GameOverDisplay : UI.Text;
public var GameRestartButton : UI.Button;

function Start () {
	gameOver = false;
	gameRestart = false;
	GameOverDisplay.text = "";
	GameRestartButton.gameObject.SetActive(false);
}

function Update () {
	ScoreDisplay.text = "Score: " + Score.ToString();
	LifeDisplay.text = "Lives: " + Lives.ToString();
}

public function AddPoints(howMany : int) {
    Score += howMany;
}

public function GameOver() {
	gameOver = true;
	gameRestart = true;
    GameOverDisplay.text = "Game Over";
    GameRestartButton.gameObject.SetActive(true);
}

public function GameRestart() {
    SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}

public function GetGameStatus() {
	return gameOver;
}

public function SubtractLives() {
    Lives -= 1;

    if(Lives == 0) {
	    GameOver();
    }
}