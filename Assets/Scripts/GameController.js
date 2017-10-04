#pragma strict

import UnityEngine.SceneManagement;

private var BubblesSpawned : int = 0;
private var BubblesPopped : int = 0;
private var gameOver : boolean;
private var gameRestart : boolean;
private var lastCharPosition : int;
private var levelName : String;
private var levelNumber : int = 1;
private var levelOver : boolean;
private var nextLevelName : String;
private var nextLevelNumber : int;

public var BubbleCount : int = 20;
public var GameOverDisplay : UI.Text;
public var GameRestartButton : UI.Button;
public var LevelOverDisplay : UI.Text;
public var LifeDisplay : UI.Text;
public var NextLevelButton : UI.Button;
public var ScoreDisplay : UI.Text;

static var lives : int = 3;
static var score : int = 0;

function Start () {
	gameOver = false;
	gameRestart = false;
	levelOver = false;
	LevelOverDisplay.text = "";
	GameOverDisplay.text = "";
	GameRestartButton.gameObject.SetActive(false);
	NextLevelButton.gameObject.SetActive(false);
//	levelName = SceneManager.GetActiveScene().name;
//	lastCharPosition = levelName.length - 1;
//	levelNumber = int.Parse(levelName[lastCharPosition].ToString());
}

function Update () {
	ScoreDisplay.text = "Score: " + score.ToString();
	LifeDisplay.text = "Lives: " + lives.ToString();
}

public function AddPoints(howMany : int) {
    score += howMany;
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
    lives = 3;
    score = 0;
    SceneManager.LoadScene("Level1");
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

public function GetLevelNumber() {
	levelName = SceneManager.GetActiveScene().name;
	lastCharPosition = levelName.length - 1;
	levelNumber = int.Parse(levelName[lastCharPosition].ToString());
	return levelNumber;
}

public function LevelStatusCheck() {
	if(!GetBubbleStatus() && !GetGameStatus()) {
	    LevelOver();
	}
}

public function LevelOver() {
	levelOver = true;
    LevelOverDisplay.text = "You Did It! \n Level Passed.";
	NextLevelButton.gameObject.SetActive(true);
    return true;
}

public function NextLevel() {
    nextLevelNumber = GetLevelNumber() + 1;
    levelName = levelName.Substring(0, levelName.length - 1);
    nextLevelName = levelName.Concat(levelName, nextLevelNumber.ToString());
//Debug.Log("nextLevelNumber");
//Debug.Log(nextLevelNumber);
//Debug.Log("levelName");
//Debug.Log(levelName);
//Debug.Log("nextLevelName");
//Debug.Log(nextLevelName);
    SceneManager.LoadScene(nextLevelName);
}

public function SubtractLives() {
    lives -= 1;

    if(lives == 0) {
	    GameOver();
    }
}