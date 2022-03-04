
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0 ;
var started = false;



$(document).keydown(function(){
  if(!started){

    $("#level-title").html("level " + level);
    newSequence();
    started = true;

  }


});



//-------------------------------------------------------------------------------------------------------------------------


function newSequence(){

  //empty the array everytime new array called
  userClickedPattern = [];


  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 4);

//passing randomNumber to select color in buttonColors array
var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);


//animate
$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

//for performing sound
 playSound(randomChosenColor);
 level++;
$("#level-title").html("level " + level);



};






//-----------------------------------------------------------------------------------------------------------------------------



$(".btn").click(function(){

//when button is clicked to retrieve id of that button
var userChosenColor = $(this).attr("id");
userClickedPattern.push(userChosenColor);
playSound(userChosenColor);
$("#" + userChosenColor).fadeOut(100).fadeIn(100);
animatePress(userChosenColor);
checkSolution(userClickedPattern.length - 1);


});

//---------------------------------------------------------------------------------------------------------

function playSound(name){
  switch(name){

    case "blue" :
                var audio = new Audio("sounds/blue.mp3").play();
                break;

    case "green" :
                var audio = new Audio("sounds/green.mp3").play();
                break;

    case "red" :
                  var audio = new Audio("sounds/red.mp3").play();
                  break;

    case "yellow" :
                var audio = new Audio("sounds/yellow.mp3").play();
                  break;

     default :
                var audio = new Audio("sounds/wrong.mp3").play();
                break;
  }
}

//---------------------------------------------------------------------------------------------------------------

//doing animation for pressed button
function animatePress(currentColor){

  switch(currentColor){
    case "blue" :

    $("#" + currentColor).addClass("pressed");
  setTimeout(function(){
    $(".btn").removeClass("pressed");
  },100);
  break;

  case "green" :

        $("#" + currentColor).addClass("pressed");
         setTimeout(function(){
         $(".btn").removeClass("pressed");
       },100);
  break;

  case "red" :
         $("#" + currentColor).addClass("pressed");
        setTimeout(function(){
        $(".btn").removeClass("pressed");
      },100);

    break;


  case "yellow" :
                $("#" + currentColor).addClass("pressed");
                setTimeout(function(){
                $(".btn").removeClass("pressed");
              },100);

      break;

}
}


function checkSolution(currentLevel){

if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){

 if(userClickedPattern.length === gamePattern.length){

    setTimeout(function(){
      newSequence();
    },1000);
 }

}else{
  $("h1").text("Game over, press any key to restart");
   $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over")
  },200);
   playSound("default");
   startOver();

}}


function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
