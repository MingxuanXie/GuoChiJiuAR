var x = document.getElementById("voice"); 
var z = document.getElementById("npc");
var a = document.getElementById("startbutton");
var b = document.getElementById("opponent");
var c = document.getElementById("game");
var d = document.getElementById("replay");
var e = false;
document.getElementById("a-loader").addEventListener("loaded", activateStartButton);
function activateStartButton() {
  a.style.display = "block";
}
function activateScene() {        
    x.play(); 
    setTimeout(function(){
      z.setAttribute('animation-mixer', {timeScale: 1});
    }, 300);
    a.style.display = "none";
    setTimeout(function(){
      b.object3D.visible = true;
      c.style.display = "block";
    }, 26000);
    setTimeout(function(){
      // z.setAttribute('animation-mixer', {clip: 'xy-xunhuan', loop: 'repeat'});
      // BUG: xy-xunhuan animation has 30s gap
      z.setAttribute('animation-mixer', {timeScale: -1, loop: 'repeat'});
      e = true;
      setInterval(function(){
        if (e){
          z.setAttribute('animation-mixer', {timeScale: 1});
          e = false;
        } else {
          z.setAttribute('animation-mixer', {timeScale: -1});
          e = true;
        }
      }, 3000);
    }, 30000);
}
function activateGame() { 
  b.components.gif.togglePlayback();
  c.style.display = "none";
  d.style.display = "block";
}
function activateReplay() { 
  b.components.gif.togglePlayback();
  c.style.display = "block";
  d.style.display = "none";
}