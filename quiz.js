// !
// *
// ?
// TODO 
// 

const quizData = [
    {
        question: 'What is the correct syntax for referring to an external script called "app.js"?',
        a: '<script href="app.js">',
        b: '<script src="app.js">',
        c: '<script file="app.js">',
        correct: 'b',
    }, {
        question: 'What is the most Popular Front-End programming Language?',
        a: "Python",
        b: "C++",
        c: 'Javascript',
        correct: 'c',
    }, {
        question: 'How do you create a function in JavaScript?',
        a: 'function:myFunction(){}',
        b: 'function = myFunction(){}',
        c: 'function myFunction(){}',
        d: 'myFunction():function{}',
        correct: 'c',
    }, {
        question: 'How do you call a function named "myFunction" in JavaScript?',
        a: 'call myFunction()',
        b: 'myFunction()',
        c: 'call function myFunction()',
        d: 'execute myFunction()',
        correct: 'b'
    }, {
        question: 'How to write an IF statement in JavaScript?',
        a: 'if i == 5 then',
        b: 'if i = 5',
        c: 'if (i == 5)',
        d: 'if i:5',
        correct: 'c',
    }, {
        question: "What does the 'this' keyword refer to in a method?",
        a: 'The window object',
        b: 'The object that the method belongs to',
        c: 'The function that the method belongs to',
        d: 'None of above',
        correct: 'b',
    }, {
        question: 'What is the correct way to check if a variable "x" is an array in JavaScript?',
        a: 'Array.isArray(x)',
        b: 'x.isArray()',
        c: ' x.type() == "array" ',
        d: ' typeof x == "array" ',
        correct: 'a',
    }, {
        question: "What is the output of '10' + 3 in JavaScript?",
        a: '13',
        b: " '103' ",
        c: " '13' ",
        d: 'NaN',
        correct: 'b',
    }, {
        question: " What is the result of typeof null in JavaScript? ",
        a: "  'null' ",
        b: "undefined",
        c: 'object',
        d: "NaN",
        correct: 'c',
    }, {
        question: 'In JavaScript, how do you deep clone an object?',
        a: 'const newObj = Object.clone(obj)',
        b: 'const newObj = {...obj}',
        c: 'const newObj = JSON.parse(JSON.stringify(obj))',
        d: 'const newObj = obj',
        correct: "c. const newObj = JSON.parse(JSON.stringify(obj)) - This creates a deep clone of an object. The spread operator (...obj) creates a shallow copy. The other options don't work in JavaScript for cloning objects. ",
    }, {
        question: 'What does NaN stand for in JavaScript?',
        a: 'no Actual Number',
        b: 'Not a Number',
        c: 'Not Available Null',
        d: 'Natural actual Number',
        correct: 'b',
    }, {
        question: 'Which function can be used to parse a string to an integer in JavaScript?',
        a: 'Number.parseInt()',
        b: 'String.parseInt()',
        c: 'Math.parseInt()',
        d: 'Parse.Integer()',
        correct: 'a. Number.parseInt()',
    }, {
        question: " What is the purpose of 'use strict' in JavaScript? ",
        a: 'Enforces stricter parsing and error handling',
        b: 'Forces the browser to render faster',
        c: 'Encrypts your JavaScript code',
        d: 'None of the above',
        correct: 'a. Enforces stricter parsing and error handling',
    }, {
        question: "What is a promise in JavaScript?",
        a: 'A value that may not be available yet',
        b: 'An error handling mechanism',
        c: 'A language feature introduced in ES2020',
        d: 'A way to pause the execution of a function',
        correct: 'a. A value that may not be available yet',
    }, {
        question: "What is the result of '2' + 2 in JavaScript?",
        a: '4',
        b: " '22' ",
        c: " '4' ",
        d: "NaN",
        correct: "b. '22' ",
    }, {
        question: "What will be the output of the following code: console.log([1,2] + [3,4])?",
        a: "[1,2,3,4]",
        b: " '1,23,4' ",
        c: " NaN ",
        d: "Undefined",
        correct: " b. '1,23,4' ",
    }, {
        question: " How can you add an element at the beginning of an array? ",
        a: 'push()',
        b: 'unshift()',
        c: 'shift()',
        d: 'pop()',
        correct: 'b. unshift()'
    }, {
        question: " What is a closure in JavaScript? ",
        a: " A private variable.",
        b: " A local variable ",
        c: " A function bundled together with it's lexical environment",
        d: " A function inside another function",
        correct: "c. A function bundled together with its lexical environment",
    }, {
        question: " What is the output of ' typeof null ' in JavaScript? ",
        a: " 'null' ",
        b: " undefined ",
        c: "object",
        d: " 'NaN' ",
        correct: ' c. object',
    }, {
        question: " How do you create a Symbol type in JavaScript? ",
        a: " let symbol = new Symbol(); ",
        b: " let symbol = Symbol(); ",
        c: " let symbol = {}; ",
        d: " let symbol = []; ",
        correct: " b. let symbol = Symbol(); ",
    }




];

const answerELs = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentDataQuiz = quizData[currentQuiz]
    questionEl.innerText = currentDataQuiz.question;

    a_text.innerText = currentDataQuiz.a;
    b_text.innerText = currentDataQuiz.b;
    c_text.innerText = currentDataQuiz.c;
    d_text.innerText = currentDataQuiz.d;
}

function getSelected() {

    let answer = undefined; 

    answerELs.forEach((answerEL) => {
        if(answerEL.checked) {
            answer = answerEL.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerELs.forEach((answerEL) => {
        answerEL.checked = false;
    });
}



submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
            <button onclick="location.reload()">Reload</button>
            `;
            // TODO: show results
            alert("You have finished! Get yourself a cookie!");
        }
    }

})





