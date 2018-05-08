new WOW().init();

var questions = [{
  "question": "When do you sleep normally?",
  "choice1": "7pm",
  "choice2": "9pm",
  "choice3":"12am",
  "choice4":"3am",
  "answer":"4",
  "thisimage1": './image/7pm.jpg',
  "thisimage2": './image/9pm.jpg', 
  "thisimage3": './image/12am.jpg', 
  "thisimage4": './image/3am.jpg',  
},{
  "question": "What kind of food do you eat the most?",
  "choice1": "Salad",
  "choice2": "Salmon",
  "choice3":"Avocado",
  "choice4":"Pizza",
  "answer":"2",
  "thisimage1": './image/salad.jpg',
  "thisimage2": './image/salmon.jpg', 
  "thisimage3": './image/avocado.jpg', 
  "thisimage4": './image/pizza.jpg',  
},{
  "question": "How organized is your desk?",
  "choice1": "Very clean",
  "choice2": "Organized",
  "choice3":"Messy",
  "choice4":"Chaotic",
  "answer":"4",
  "thisimage1": './image/nothing.jpg',
  "thisimage2": './image/organized-desk.jpg', 
  "thisimage3": './image/messy-desk.jpg', 
  "thisimage4": './image/chaotic-desk.jpg',  
},{
  "question": "How big a work group do you prefer?",
  "choice1": "Large Group",
  "choice2": "Small Group",
  "choice3":"Two people",
  "choice4":"On your own",
  "answer":"4",
  "thisimage1": './image/group-work.png',
  "thisimage2": './image/small-group.jpg', 
  "thisimage3": './image/two-people.png', 
  "thisimage4": './image/one-person.jpg',  
},{
  "question": "Which one is you handedness?",
  "choice1": "Left hand",
  "choice2": "Right hand",
  "choice3":"Both",
  "choice4":"I don't know",
  "answer":"3",
  "thisimage1": './image/left-hand.jpg',
  "thisimage2": './image/right-hand.jpg', 
  "thisimage3": './image/both.jpg', 
  "thisimage4": './image/question-mark.jpg',  
}];


var currentQuestion = 0;
var score = 0;
var finQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionDisplay = document.getElementById('question');
var choice_1 = document.getElementById('choice1');
var choice_2 = document.getElementById('choice2');
var choice_3 = document.getElementById('choice3');
var choice_4 = document.getElementById('choice4');
var nextButton = document.getElementById('nextButton');
var previousButton = document.getElementById('previousButton');
var alert = document.getElementById('alertBox');
var resultCont = document.getElementById('result');
var playAgain =  document.getElementById('again');
var image1 = document.getElementById('image1');
var image2 = document.getElementById('image2');
var image3 = document.getElementById('image3');
var image4 = document.getElementById('image4');

function getQuestion (questionIndex) {
  var q = questions[questionIndex];
  questionDisplay.textContent = (questionIndex + 1) + '. ' + q.question;
  choice_1.textContent = q.choice1;
  choice_2.textContent = q.choice2;
  choice_3.textContent = q.choice3;
  choice_4.textContent = q.choice4;
  image1.src=q.thisimage1;
  image2.src=q.thisimage2;
  image3.src=q.thisimage3;
  image4.src=q.thisimage4;
};

function NextQuestion () {
  var selectedChoice = document.querySelector('input:checked');
  if(!selectedChoice){
   alert.innerHTML = "You haven't chosen your answer";
  }
  if (selectedChoice.checked == true){
    alert.innerHTML = "";
  }
  var answer = selectedChoice.value;
  if(questions[currentQuestion].answer == answer){
    score += 10;
  }

  selectedChoice.checked = false;
  currentQuestion++;

  if(currentQuestion == finQuestions){
    container.style.display = 'none';
    resultCont.style.display = '';
    again.style.display = '';
    
  
    if ( score == 50){
      resultCont.textContent = 'Result:' + ' ' + 'Wow! You are very clever.';
    }
    if ( score == 40){
      resultCont.textContent = 'Result:' + ' ' + 'You are clever, but not very clever.';
    }
    if ( score == 30 || score == 20  ){
      resultCont.textContent = 'Result:' + ' ' + 'You are a medicore person.';
    }
     if ( score == 10){
      resultCont.textContent = 'Result:' + ' ' +'You are not even a medicore person.';
    } 
    if ( score == 0){
      resultCont.textContent = 'Result:' + ' '  +  'Sorry, you are so stupid!';
    }
    return;
  }

  getQuestion(currentQuestion);

 if (currentQuestion >= 1 ){
    previousButton.style.display = '';
  } 
}

getQuestion(currentQuestion);


function previousQuestion(){
  getQuestion(currentQuestion-1);
  currentQuestion--;
   if (currentQuestion == 0 ){
    previousButton.style.display = 'none';
  }
  return;

}



function oneChoiceOnly(id) {
for (var i = 1;i <= 4; i++){
    if ("Check" + i === id && document.getElementById("Check" + i).checked === true){
    document.getElementById("Check" + i).checked = true;
    } else {
   document.getElementById("Check" + i).checked = false;
            }
    }  
}