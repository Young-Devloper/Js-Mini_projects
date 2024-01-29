// Variables and manipulation
let form = document.getElementById('form');
let ques = document.getElementById('question');
let inpt = document.getElementById('input');
let verify = document.getElementById('submit');
let record = document.getElementById('score');
var inputElement = document.getElementById('input');

// Initial question
let q1 = Math.floor(Math.random() * 10);
let q2 = Math.floor(Math.random() * 10);
let result = q1 * q2;
//validation//
// Points of the user
let point = 0;
record.innerText = `Score: ${point}`;
ques.innerHTML = `What is ${q1} multiplied by ${q2} ?`;
form.addEventListener('submit', (event) => {
  event.preventDefault();
   
  const userRespond = parseInt(inpt.value);
  if(userRespond === result && point >=0){
   point+= 1;
  }else if(userRespond!==inpt && point >0){
    point-= 1;
  }else{
    point = point
  }
  // Update score display
  record.innerText = `Score: ${point}`;

  // Generate new random numbers for the next question
  q1 = Math.floor(Math.random() * 10);
  q2 = Math.floor(Math.random() * 10);
  result = q1 * q2;
  // Display the next question
  ques.innerHTML = `What is ${q1} multiplied by ${q2} ?`;
  // Clear the input field for the next question
  inpt.value = '';
});


