
var click = document.getElementById('click');
  var score = 0;
  var view = document.getElementById('view');
  var multiplier = document.getElementById('multi');
  var countClick = 1;
  var prix = 20;
  var autoclick = document.getElementById('autoclick');
  
  


  var addScore = function(){
     if (score >= 0) {
         score = score + countClick;
         view.innerHTML = score;
         }

  }
  click.addEventListener("click", addScore);

  var multiple = function(){


     if (score >= prix) {
         countClick = countClick * 2;
         score = score - prix;
         prix = prix * 2;
         multiplier.value = "multiplier x" + countClick + " prochaine multiplication, prix " + prix;

     }
  }
  multiplier.addEventListener("click", multiple);

  var auto = function(){
     if (score > 50){
         score = score - 50;
         setInterval(addScore,1000);
     }
     autoclick.style.display  = "none";
  }
  autoclick.addEventListener("click", auto);

  


  