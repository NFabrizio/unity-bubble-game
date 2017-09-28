#pragma strict

private var gameController : GameController;
private var gc : GameObject;
private var stageDimensions : Vector3;

function Start() {
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();
    stageDimensions = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height, 0));
    var newPosition : Vector3 = new Vector3(stageDimensions.x, stageDimensions.y, stageDimensions.z);
	transform.position = newPosition;
}

function OnTriggerExit2D(other: Collider2D) {
    Destroy(other.gameObject);
    gameController.SubtractLives();
	gameController.BubblePop();
	gameController.LevelStatusCheck();
}
