
var score = 0;
var btn = document.getElementById("btn");
btn.onclick = function () {

    if (click >= 1) {    Multiply
        score = score + click;
    } else {
        score = score + 1;
    }
    document.getElementById("display").innerHTML = score;
};
var multiply = document.getElementById("multiply");
var click = 0;
multiply.onclick = function augmenterMultiplicateur() {
    var price =  click * 50 ; multiplier
    if (score > price || 50 ){  
    click++;
    if (price !== 0){ 
    
 }else {
   score = score - 50;   
 }
     document.getElementById("display").innerHTML = score;
     
    }
    multiply.innerHTML = "x"+ click;
    
};