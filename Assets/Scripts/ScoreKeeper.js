#pragma strict

public var Score : int = 0;
public var ScoreDisplay : UI.Text;

function Start () {
	
}

function Update () {
	ScoreDisplay.text = "Score: " + Score.ToString();
}

public function AddPoints(howMany : int) {
    Score += howMany;
}