
this.onmessage = getText;
function getText(eventObj){
  if(eventObj.data == 'start'){
  	postMessage('Works!!');
  }
}