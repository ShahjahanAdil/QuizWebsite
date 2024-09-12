const questions = [
    {
        'ques': 'What is full form of HTML?',
        'a': 'Hyper Texting Markup Language',
        'b': 'Hyper Text Markup Language',
        'c': 'Hyper Transform Markup Language',
        'd': 'Hyper Testing Markup Language',
        'correct': 'b'
    },
    {
        'ques': 'What is full form of CSS?',
        'a': 'Cascade Styling Sheet',
        'b': 'Cascading Styling Sheet',
        'c': 'Cascade Style Sheet',
        'd': 'Cascading Style Sheet',
        'correct': 'c'
    },
    {
        'ques': 'HTML is?',
        'a': 'Markup Language',
        'b': 'Programming Language',
        'c': 'AI Language',
        'd': 'Coding Language',
        'correct': 'a'
    }
]

let index = 0;
let right = 0, wrong = 0, total = questions.length;
let quesBox = document.getElementById('quesBox');
let options = document.querySelectorAll("input[type='radio']");

function changeQuestion() {
    if (index == total) {
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.ques}`;
    options[0].nextElementSibling.innerText = data.a;
    options[1].nextElementSibling.innerText = data.b;
    options[2].nextElementSibling.innerText = data.c;
    options[3].nextElementSibling.innerText = data.d;
}

let submit_btn = document.querySelector('.btn');
submit_btn.addEventListener('click', function submitQues() {
    const data = questions[index];
    let ans = matchAns();
    if (!ans) {
        alert("Please select an option");
        return;
    }
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    changeQuestion();
})

function matchAns() {
    let answer;
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

function reset() {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

function endQuiz() {
    document.querySelector('.box').innerHTML = `<div style="text-align: center;"> <h2> Thank you for playing the quiz. </h2>
    <h3> ${right} / ${total} are correct. </h3> </div>`
}

changeQuestion(index);