#pragma strict

private var stageDimensions : Vector3;

function Start() {
    stageDimensions = Camera.main.ScreenToWorldPoint(new Vector3(Screen.width, Screen.height,0));
Debug.Log("stageDimensions");
Debug.Log(stageDimensions.x);
Debug.Log(stageDimensions.y);
    var newPosition : Vector3 = new Vector3(stageDimensions.x, stageDimensions.y, stageDimensions.z);
Debug.Log("transform.position1");
Debug.Log(transform.position);
	transform.position = newPosition;
Debug.Log("transform.position2");
Debug.Log(transform.position);
}

function OnTriggerExit2D(other: Collider2D) {
    Destroy(other.gameObject);
}
