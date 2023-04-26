const numb1 = Math.ceil(Math.random()*20);
const numb2 = Math.ceil(Math.random()*10);

const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input")

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

let score = JSON.parse(localStorage.getItem("score"));

if(!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${numb1} multiply by ${numb2} ?`;

const correctAnswer = numb1 * numb2; 

formEl.addEventListener("submit", () => {

    const userAnswer = +inputEl.value
    if(userAnswer === correctAnswer){
        score++;
        updateLocalStorage()

    }else{
        score--;
        updateLocalStorage()
    }

});

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score));
}

