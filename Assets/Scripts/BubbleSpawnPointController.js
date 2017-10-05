#pragma strict

private var bubbleCount : boolean;
private var gameController : GameController;
private var gc : GameObject;
private var gameOver : boolean;
private var newPosition : Vector3;
private var nextGenTime : float;
private var randomDelay : float;
private var randomX : float;
private var stageDimensions : Vector3;

public var BubblePrefab : GameObject;
public var DelayUpper : float;
public var DelayLower : float;
public var LeftBoundary : float = -8;
public var RightBoundary : float = 8;


function Start () {
    stageDimensions = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();
	DelayLower = DelayLower / gameController.GetLevelNumber();
	DelayUpper = DelayUpper / gameController.GetLevelNumber();

	ChangeBubblePosition();
}

function Update () {
	bubbleCount = gameController.GetBubbleCount();
	gameOver = gameController.GetGameStatus();

	if(!bubbleCount) {
		return;
	}

	if(Time.time > nextGenTime && !gameOver) {
		if(bubbleCount) {
			Instantiate(BubblePrefab, transform.position, Quaternion.identity);
			gameController.BubbleSpawn();
		}
		randomDelay = Random.Range(DelayLower, DelayUpper);
		nextGenTime = Time.time + randomDelay;

		ChangeBubblePosition();
	}
}

function ChangeBubblePosition() {
    randomX = Random.Range(LeftBoundary, RightBoundary);
	newPosition = new Vector3(randomX, -(stageDimensions.y / 2), transform.position.z);
	transform.position = newPosition;
}
