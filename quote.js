document.addEventListener("DOMContentLoaded", (event) => {
    console.log("The DOM is loaded");
  
  var quotes = ["I would fight the devil himself if he stepped into the Octagon","Don't hurt your opponent if you don't have to, submit him.","Jiu-Jitsu is like a philosophy. It helps me learn how to face life.","Hi, my name is Royce Gracie. I'm a 4th degree black belt in Gracie Jiu-Jitsu and I'm here to prove that my family's fighting style is the best. (introduction at the first Ultimate Fighting Championship)","I go to Disneyland!","Watch you mouth you call me lame.","I can't afford to get hit. I'm not punch-proof","He tapped, I let go, and then he tried to continue.","I threw in a couple of head butts and when I got the choke, I held on a little longer than I should have. Let's just say that I didn't feel him tap.","The idea of jiu-jitsu is to give the little guy a chance to beat the big guy."]
  
  document.getElementById('new-quote').onclick = function(e){
    var r = Math.floor(Math.random() * 10);
      document.getElementById("quote").innerHTML = quotes[r];
    }  
  
  });