#pragma strict

private var anim : Animator;
private var audioSrc : AudioSource;
function Start () {
	anim = GetComponent.<Animator>();
	audioSrc = GetComponent.<AudioSource>();
}

function Update () {
	
}

function OnMouseDown () {
//  Debug.Log("You clicked the bubble");

  audioSrc.Play();
  anim.SetTrigger("Popping");
  Destroy(gameObject, 0.5);
}
