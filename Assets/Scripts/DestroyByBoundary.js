#pragma strict

private var gameController : GameController;
private var gc : GameObject;
private var newPosition : Vector3;
private var stageDimensions : Vector3;

function Start() {
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();
    stageDimensions = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
    newPosition = new Vector3(stageDimensions.x, stageDimensions.y + 0.5, stageDimensions.z);
	transform.position = newPosition;
}

function OnTriggerExit2D(other: Collider2D) {
    Destroy(other.gameObject);
    gameController.SubtractLives();
	gameController.BubblePop();
	gameController.LevelStatusCheck();
}
