// audio File
var audio = new Audio('assets/audio/Game of Thrones.mp3');
    audio.play();

$(document).ready(function(){

    // Answer and question stored in an array
  var q1 = {
      	question: "Who pushed young Bran Stark out of the window in season one, resulting in his paralysis from the waist down?",
        choice1: " Tyrion Lannister ",  
        choice2: "Jamie Lannister",
        choice3: "Theon Greyjoy",
        choice4: "Hodor",
        answer: "Jamie Lannister",
       
     };

   var q2  = {
        question: "The Stark children (and Jon Snow) adopt six orphaned direwolf cubs in season one - Grey Wind, Lady, Ghost, Shaggydog, Summer and...?",
        choice1:"Gendry",   
      	choice2: "Nymeria",
        choice3: "Daisy",
        choice4: "Nessie",
        answer: "Nymeria",
        
    };
  var q3 = {
       question: "What was the name of Stannis Baratheon's assault on King's Landing in the penultimate episode of season two?",
    	 choice1: "The Battle of King's Landing",   
       choice2: "The Battle of the Baratheons",
       choice3: "The Battle of Blackwater Bay",
       choice4: "The Battle of the Lannister",
       answer: "The Battle of Blackwater Bay",
       

     };
  var q4 = {
    	question: "What is the name of the so-called King Beyond the Wall, the leader of the Wildings?",
  	  choice1: "Mance Rayder ",
  	  choice2: "Jeor Mormont",
      choice3: "Qhorin Halfhand", 
      choice4: "Jon Snow",
      answer: "Mance Rayder",
      
    };
 var q5 = {
    	question: "What unusual deity does Melisandre, the Red Priestess, follow?",
    	choice1: "The Lord of Fire", 
    	choice2: "The Old Gods",
      choice3: "The Dragon Gods", 
      choice4: "The Lord of Light",
      answer: "The Lord of Light",
     

    };
  var q6 = {
      question: "What is the name of a person that can enter the minds of animals?",
      choice1: "Sellsword",
      choice2: "Grand Maester",
      choice3: "A warg",
      choice4: "A dwarf",
      answer: "A warg",
      
  };

var q7 = {
      question: "What was the name of the Stark ancestral sword that was melted down by Tywin Lannister in the first episode of season four?",
      choice1: "Fire", 
      choice2: "Ice",
      choice3: "Wolf",
      choice4: "Oathbreaker",
      answer: "Ice",
      
  };

  var triviaQuestion = [q1,q2,q3,q4,q5,q6,q7];
 
  

 // variables list
  var questions = [];

  var num =0;
  var time =30;
  var numberCorrect = 0;
  var numberWrong = 0;
  var numTimeout = 0;

   // Timer
  function nextquestion() {
    time = 30;
    counter = setInterval(increment, 1000);
    $(".timer").html("<h2>Time Remaining:" + time + "</h2>");
    $(".question").html(questions[num].question);
    $(".ans1").html(questions[num].choice1);
    $(".ans2").html(questions[num].choice2);
    $(".ans3").html(questions[num].choice3);
    $(".ans4").html(questions[num].choice4);
   
  };


  function increment() {
    time--
    $(".timer").html("<h2>Remaining Time " + time + "</h2>")
    if (time == 0) {
      timeout();
      stop();
      $(".choice").empty();
    }
    else if (time < 10) {
      $(".timer").addClass("red");
      setTimeout(function(){$(".timer").removeClass("red")},500)
    };
  };


  function stop() {
    clearInterval(counter);
    num++;
    if (num == questions.length) {
      setTimeout(endgame,5000);
    }
    else {
      setTimeout(nextquestion,5000);
    };
  };


  function correctanswer() {
    $(".question").html("<p>You are Correct!</p>");
  
  };

  function wronganswer() {
    numberWrong++;
    $(".question").html("<p>WRONG <br> The correct answer was: " + questions[num].answer + "</p>");
   
  };


  function timeout() {
    numTimeout++;
    $(".question").html("<p>Time's up! <br> The correct answer was: " + questions[num].answer + "</p>");
    
  };

  function endgame() {
    $(".question").html("<h2>You got " + numberCorrect + " answers correct!</h2>"
       + "<h2>You got " + numberWrong + " Wrong</h2>" + "<h2>You didn't answer "  + numTimeout +  " questions</h2>");
    $(".choice").empty();
    $("timer").empty();
   
    num = 0;
    numberCorrect = 0;
    numberWrong = 0;
    numTimeout = 0;
    $("button").show();
  };
  $(".startButton").on("click",function(){
    questions = triviaQuestion;
    nextquestion();
    $("button").hide();
   
  }) 

  $(".choice").on("click", function() {

      if($(this).text() == questions[num].answer) {
        numberCorrect++;
        correctanswer();
        stop();
      }

      else {
        wronganswer();
        stop();
      };

      $(".choice").empty();

  });

  


});







































































