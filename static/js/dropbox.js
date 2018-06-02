function clickme(e) {
	console.log("you clicked");
	e.target.setIcon(markIcon);
}

// Voor het wisseleffect
var donefirst = false;

var selectedmarkers = []

//functie voor het afhandelen van kilks op de kaart
function mapClick(event) {
	console.log("Clicked marker " + event);
	if(selectedmarkers.length == 2) {
		el1 = document.getElementById(selectedmarkers[0]);
		el2 = document.getElementById(selectedmarkers[1]);
		
		el1.innerHTML = markhtml;
		el2.innerHTML = markhtml; 
		
		selectedmarkers = [];
	}
	
	myelem = document.getElementById(event);
	myelem.innerHTML = selecthtml;
	
	selectedmarkers.push(event);
	
	

}
// Using the generated map
// Koppel het evenement aan de kaart
//marker_cluster_b28039293a544acbb1d95aabe83381be.on('click', mapClick);

var counter = 0;
var markers = document.getElementsByClassName('my-div-icon');

for(var i = 0; i < markers.length; i++) {
	counter++;
	strcount = counter.toString();
	newid = "marker_" + strcount;
	
	markers.item(i).setAttribute('onclick', "mapClick('" + newid + "')");
	markers.item(i).id = newid;
}
