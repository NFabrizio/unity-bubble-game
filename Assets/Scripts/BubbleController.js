#pragma strict

private var anim : Animator;
private var audioSrc : AudioSource;
private var rb : Rigidbody2D;

// Public vars will show in the Unity editor component
public var thrust : float = 5;

function Start () {
	anim = GetComponent.<Animator>();
	audioSrc = GetComponent.<AudioSource>();
	rb = GetComponent.<Rigidbody2D>();

	rb.AddForce(transform.up * thrust);
	Destry(GameObject, 7.0f);
}

function Update () {
	
}

function OnMouseDown () {
//  Debug.Log("You clicked the bubble");

  audioSrc.Play();
  anim.SetTrigger("Popping");
  Destroy(gameObject, 0.5);
}
