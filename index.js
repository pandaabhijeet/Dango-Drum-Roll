
var numOfButtons = document.querySelectorAll(".drum").length;

console.log("No of Buttons: " + numOfButtons);

for(var i =0; i < numOfButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       

        var buttonClicked =  this.innerHTML;

        buttonAnimation(buttonClicked);


        switch(buttonClicked){
            case "W":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "A":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "S":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "D":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "J":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "K":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "L":
                var kickBass = new Audio("sounds/kick-bass.mp3");
                kickBass.play();
                break;
            default :
            console.log(buttonClicked);
        }
    });
}


document.addEventListener("keypress" , function(event){

    var keyPressed = event.key.toUpperCase();

    buttonAnimation(keyPressed);

    switch(keyPressed){
        case "W":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;

        case "A":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "S":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "D":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "J":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "K":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "L":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        default :
        alert("Not A Dango Key !");
    }
})

function buttonAnimation(keyAction)
{
    var currentKey = keyAction.toLowerCase();
    var activeKey = document.querySelector("." + currentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed")}
        , 100);
}
