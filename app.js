
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];






btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// time
 function currentTime(){
  const today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = timeCheck(minutes);
  seconds = timeCheck(seconds);
  setTimeout(currentTime,1000);

  if (hours < "12") {
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds +" AM";
   
  }else{
    document.getElementById("time").innerHTML = hours +":"+ minutes +":"+ seconds +" PM";
    
  }


 }

 function timeCheck(i){

  if ( i < 10) {
    i="0" + i
  };
  return i;

 }