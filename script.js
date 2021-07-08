var flipper = document.getElementById("flipcard");
y = false;
t = false;
var rotation;
var counter = 0;

var x = document.getElementById("increment").addEventListener("click", function () {
    if (y) {
        counter++;
        setTimeout(function () {
            document.getElementById("decrement").innerHTML = "+";
            document.getElementById("increment").innerHTML = "-";
            document.getElementById("display").style = "transform: rotateY(-" + rotation + "deg)";
            document.getElementById("display").innerHTML = counter;
        }, 1200);


    }
    else {
        counter--;
        setTimeout(function () {
            document.getElementById("decrement").innerHTML = "-";
            document.getElementById("increment").innerHTML = "+";
            document.getElementById("display").style = "transform: rotateY(-" + rotation + "deg)";
            document.getElementById("display").innerHTML = counter;
        }, 1200);

    }
    rotation = counter * 180;
    
    flipper.style = "transform: rotateY(" + rotation + "deg)";
    
})

var x = document.getElementById("decrement").addEventListener("click", function () {
    if (t) {
        counter--;
        setTimeout(function () {
            document.getElementById("decrement").innerHTML = "+";
            document.getElementById("increment").innerHTML = "-";
            document.getElementById("display").style = "transform: rotateY(-" + rotation + "deg)";
            document.getElementById("display").innerHTML = counter;
        }, 1200);

    }
    else {
        counter++;
        setTimeout(function () {
            document.getElementById("decrement").innerHTML = "-";
            document.getElementById("increment").innerHTML = "+";
            document.getElementById("display").style = "transform: rotateY(-" + rotation + "deg)";
            document.getElementById("display").innerHTML = counter;
        }, 1200);


    }
    rotation = counter * 180;

    flipper.style = "transform: rotateY(" + rotation + "deg)";
   
    
    
})