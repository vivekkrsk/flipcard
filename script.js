var displaycounter = document.getElementById("display");
var counter = 0;

var flipper = document.getElementById("flipcard");

var x = document.getElementById("increment").addEventListener("click", function () {
    counter++;
    var rotation = 180 * counter;
    flipper.style = "transform: rotateY(" + rotation + "deg)";
    displaycounter.innerHTML = counter;
        //document.getElementById("decrement").id = "wait";
        //document.getElementById("increment").id = "decrement";
        //document.getElementById("wait").id = "increment";

})

var y = document.getElementById("decrement").addEventListener("click", function () {
    counter--;
    var rotation = 180 * counter;
    flipper.style = "transform: rotateY(" + rotation + "deg)";
    displaycounter.innerHTML = counter;
    //document.getElementById("decrement").id = "wait";
    //document.getElementById("increment").id = "decrement";
    //document.getElementById("wait").id = "increment";

})