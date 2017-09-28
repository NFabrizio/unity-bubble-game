#pragma strict

import UnityEngine.SceneManagement;

private var BubblesSpawned : int = 0;
private var BubblesPopped : int = 0;
private var gameOver : boolean;
private var gameRestart : boolean;
private var levelOver : boolean;

public var BubbleCount : int = 20;
public var GameOverDisplay : UI.Text;
public var GameRestartButton : UI.Button;
public var LevelOverDisplay : UI.Text;
public var Lives : int = 3;
public var LifeDisplay : UI.Text;
public var Score : int = 0;
public var ScoreDisplay : UI.Text;

function Start () {
	gameOver = false;
	gameRestart = false;
	levelOver = false;
	LevelOverDisplay.text = "";
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

public function BubblePop() {
    BubblesSpawned -= 1;
    BubblesPopped += 1;
}

public function BubbleSpawn() {
    BubbleCount -= 1;
    BubblesSpawned += 1;
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

public function GetBubbleCount() {
	if(BubbleCount > 0) {
		return true;
	}
	return false;
}

public function GetBubbleStatus() {
	if(BubbleCount > 0 || BubblesSpawned > 0) {
		return true;
	}
	return false;
}

public function GetGameStatus() {
	return gameOver;
}

public function LevelStatusCheck() {
	if(!GetBubbleStatus() && !GetGameStatus()) {
	    LevelOver();
	}
}

public function LevelOver() {
	levelOver = true;
    LevelOverDisplay.text = "You Did It! \n Level Passed.";
    return true;
}

public function SubtractLives() {
    Lives -= 1;

    if(Lives == 0) {
	    GameOver();
    }
}