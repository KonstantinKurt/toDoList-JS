;
"use strict";
let onloads = [];
let doc = document; // Кэшируем документ;
///////////////////////////

function clearText() {
    let element = doc.getElementById('clearTask');
    element.onclick = clear;
};

function addTask() {
    let element = doc.getElementById('addTask');
    element.onclick = addNewTask;
};

onloads.push(clearText);
onloads.push(addTask);
///////////////////////////
window.onload = function() {
    for (let i in onloads) {
        onloads[i]();
    }
}
/*
window.onload = function(){
	var worker = new Worker('workerGetTime.js');
	worker.postMessage('start');
	worker.onmessage = function(eventObj){
		document.getElementById('time').innerHTML = eventObj.data;
	};
}
*/
/*function pressEnter(){
   let element = doc.getElementById('newTask');
   //element.addEventListener('keyup', pressButton);
   element.onkeyup = pressButton;
};*/
//onloads.push(pressEnter);