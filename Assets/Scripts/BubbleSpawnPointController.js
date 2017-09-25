#pragma strict

private var nextGenTime : float;
private var stageDimensions : Vector3;
private var gameController : GameController;
private var gc : GameObject;
private var gameOver : boolean;

public var BubblePrefab : GameObject;
public var DelayUpper : float;
public var DelayLower : float;
public var LeftBoundary : float = -8;
public var RightBoundary : float = 8;

function Start () {
    stageDimensions = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();
}

function Update () {
  gameOver = gameController.GetGameStatus();

  if(Time.time > nextGenTime && !gameOver) {
    Instantiate(BubblePrefab, transform.position, Quaternion.identity);
	var randomDelay : float = Random.Range(DelayLower, DelayUpper);
	nextGenTime = Time.time + randomDelay;

	var randomX : float = Random.Range(LeftBoundary, RightBoundary);
	var newPosition : Vector3 = new Vector3(randomX, -(stageDimensions.y / 2), transform.position.z);
	transform.position = newPosition;
  }
}
