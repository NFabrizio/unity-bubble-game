#pragma strict

private var gc : GameObject;
private var gameController : GameController;

function Start () {
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();
}

function OnMouseDown () {
Debug.Log("Clicked!");
	gameController.GameRestart();
}
