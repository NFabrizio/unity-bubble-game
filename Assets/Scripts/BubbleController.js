#pragma strict

private var anim : Animator;
private var audioSrc : AudioSource;
private var rb : Rigidbody2D;

// Public vars will show in the Unity editor component
public var thrust : float = 5;
public var destroyDelay : float = 15.0f;
public var PointValue : int = 100;

function Start () {
	anim = GetComponent.<Animator>();
	audioSrc = GetComponent.<AudioSource>();
	rb = GetComponent.<Rigidbody2D>();

	rb.AddForce(transform.up * thrust);
	Destroy(gameObject, destroyDelay);
}

function Update () {
	
}

function OnMouseDown () {
//  Debug.Log("You clicked the bubble");

  var gc : GameObject = GameObject.FindGameObjectWithTag("GameController");
  var scoreKeeper : ScoreKeeper = gc.GetComponent.<ScoreKeeper>();

  scoreKeeper.AddPoints(PointValue);
  audioSrc.Play();
  anim.SetTrigger("Popping");
  Destroy(gameObject, 0.5);
}
