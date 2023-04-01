window.onload = function(){
    let player = document.getElementById("player"),
        play = document.getElementByClass("play");
    
    play.addEventListener("click",function(){
      player.play();
    });
  }