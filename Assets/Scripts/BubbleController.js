#pragma strict

private var anim : Animator;
private var audioSrc : AudioSource;
private var rb : Rigidbody2D;
private var gc : GameObject;
private var gameController : GameController;
private var gameOver : boolean;

// Public vars will show in the Unity editor component
public var thrust : float = 0.1;
public var destroyDelay : float = 15.0f;
public var PointValue : int = 100;

function Start () {
	anim = GetComponent.<Animator>();
	audioSrc = GetComponent.<AudioSource>();
	rb = GetComponent.<Rigidbody2D>();
	gc = GameObject.FindGameObjectWithTag("GameController");
	gameController = gc.GetComponent.<GameController>();

	rb.AddForce(transform.up * thrust);
}

function Update () {
	gameOver = gameController.GetGameStatus();

	if(gameOver) {
		anim.SetTrigger("Popping");
		Destroy(gameObject, 0.5);
	}
}

function OnMouseDown () {
	gameController.AddPoints(PointValue);
	audioSrc.Play();
	anim.SetTrigger("Popping");
	Destroy(gameObject, 0.5);
	gameController.BubblePop();
	gameController.LevelStatusCheck();
}
