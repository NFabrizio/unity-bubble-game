#pragma strict

private var anim : Animator;
function Start () {
	anim = GetComponent.<Animator>();
}

function Update () {
	
}

function OnMouseDown () {
  Debug.Log("You clicked the bubble");
  anim.SetTrigger("Popping");
  Destroy(gameObject, 0.5);
}
