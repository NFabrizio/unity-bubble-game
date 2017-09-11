#pragma strict

var BubblePrefab : GameObject;
private var nextGenTime : float;
var DelayUpper : float;
var DelayLower : float;

function Start () {
	
}

function Update () {
  if(Time.time > nextGenTime) {
	Instantiate(BubblePrefab, transform.position, Quaternion.identity);
	var randomDelay : float = Random.Range(DelayLower, DelayUpper);
	nextGenTime = Time.time + randomDelay;
  }
}
