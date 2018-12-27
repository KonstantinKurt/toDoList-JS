;
"use strict";
let firstTime = true;
///////////////////////////
let clear = function() {
    let text = doc.getElementById('newTask');
    if (text.value) {
        text.value = "";
    } else {
        alert("Textarea is empty!!");
    }
};
let addNewTask = function() {
    let text = doc.getElementById('newTask');
    let parent = doc.getElementById('parent');
    if (text.value != " ") {
        let listCaption = doc.getElementById('caption');
        let list = doc.getElementById('taskList');
        list.style.visibility = 'visible';
        listCaption.style.visibility = 'visible';
        let li = doc.createElement('li');
        li.innerHTML = text.value;
        li.style.marginRight = '20px';
        li.display = 'inline-block';
        let checkbox = doc.createElement('input');
        checkbox.type = "checkbox";
        checkbox.style.marginLeft = '20px';
        checkbox.addEventListener('change', markTask);
        li.appendChild(checkbox);
        list.appendChild(li);
        let dateLabel = doc.createElement('label');
        let today = new Date();
        dateLabel.innerHTML = 'Added'+':'+' '+ today.getDay()+'.'+ today.getMonth()+'  '+ today.getHours() + ':' + today.getMinutes();
        dateLabel.style.marginLeft = '1%';
        dateLabel.style.color = 'green';
        li.appendChild(dateLabel);
        if (firstTime === true) {
            let clearAlldone = doc.createElement('button');
            clearAlldone.setAttribute('class', 'clearAllDone');
            clearAlldone.addEventListener('click', clearAllDone);
            clearAlldone.innerHTML = 'Remove all done';
            parent.appendChild(clearAlldone);
            let checkAll = doc.createElement('button');
            checkAll.setAttribute('class', 'checkAll');
            checkAll.addEventListener('click', checkAllboxes);
            checkAll.innerHTML = 'Check all';
            parent.appendChild(checkAll);
        }
        
        firstTime = false;
        text.focus();
    } else {
        alert("Textarea is empty!!");
    }
};
let markTask = function(eventObj) {
    let checkBox = eventObj.target;
    if (checkBox.checked) {
        checkBox.parentNode.style.textDecoration = 'line-through red';
        checkBox.parentNode.style.background = '#C3FCC7';
    } else {
        checkBox.parentNode.style.textDecoration = 'none';
        checkBox.parentNode.style.background = 'inherit';
    }
};
let clearAllDone = function() {
    let checkboxes = doc.getElementsByTagName('input');
    console.log(checkboxes);
    console.log(checkboxes.length);
    let parent = doc.getElementById('taskList');
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            parent.removeChild(checkboxes[i].parentNode);
    }
};
let checkAllboxes = function() {
    let checkboxes = doc.getElementsByTagName('input');
    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked)
            checkboxes[i].checked = true;
            checkboxes[i].parentNode.style.textDecoration = 'line-through red';
            checkboxes[i].parentNode.style.background = '#C3FCC7';
    }
};

let pressButton = function(eventObj){
   if(eventObj.keyCode == 13)
   {
   	doc.getElementById('addTask').click();
   }
};
