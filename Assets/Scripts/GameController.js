#pragma strict

public var Score : int = 0;
public var ScoreDisplay : UI.Text;
public var Lives : int = 3;
public var LifeDisplay : UI.Text;

function Start () {
	
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
}