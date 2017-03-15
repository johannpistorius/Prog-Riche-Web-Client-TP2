window.addEventListener("load",function(){
	setInterval(clock,500);
	clock();
	
	document.getElementById("add").addEventListener("click",ajouter);
});

var cpt=1;
var h,m,s;
var sound= new Audio("goldeneye.wav");

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function clock(){
	var today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	
	var form = document.getElementById('alarm');
    var alarms = form.children;
    var inputs,box,ahour,amin;

    for(var i=0;i<alarms.length;i++){
		inputs = alarms[i].getElementsByTagName('input');
		box = inputs[0];
		if(box.checked===true){
			ahour = inputs[1].value.toString();
			amin = inputs[2].value.toString();
			if(ahour === h.toString() && amin === m.toString()){
				alarmSound();
			}
		}
    }
	
}
function ajouter(){
	var div = document.createElement('div');
	
    div.id = 'row'+cpt;

	div.innerHTML = '<input type="checkbox" name="check"/>\
	<input type="number" name="hour" placeholder="Heure" min="0" max="23"/>\
	<input type="number" name="minute" placeholder="Minute" min="0" max="59"/>\
	<input type="text" name="Message" placeholder="Message"/>\
	<input type="button" value="-" onclick="supprimer('+cpt+')">';
	
	cpt++;

    document.getElementById('alarm').appendChild(div);
}
function supprimer(nb){
	var id="row"+nb;
	var child = document.getElementById(id);
	child.parentNode.removeChild(child);
}
function alarmSound(){
	sound.play();
	console.log("beep boop");
}