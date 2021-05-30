let btn = document.getElementById("btn")
let output = document.getElementById("output")
let questions = [
    '"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.” – Martin Fowler',
    '“First, solve the problem. Then, write the code.” – John Johnson',
    '“The computer was born to solve problems that did not exist before.” — Bill Gates',
    '“I do not fear computers. I fear lack of them.” - Isaac Asimov',
    '“Code is like humor. When you have to explain it, it’s bad.” – Cory House',
    '“Optimism is an occupational hazard of programming: feedback is the treatment. “ Kent Beck',
    '“Before software can be reusable it first has to be usable.” – Ralph Johnson',
    '“Make it work, make it right, make it fast.” – Kent Beck',
    '“Software is a gas; it expands to fill its container.” — Nathan Myhrvold',
    '“BASIC is to computer programming as QWERTY is to typing.” — Seymour Papert',
    '“When debugging, novices insert corrective code; experts remove defective code.” — Richard Pattis',
    '“If the code and the comments do not match, possibly both are incorrect.” — Norm Schryer',
    '“Don’t document the problem, fix it.” — Atli Björgvin Oddsson',
    '"Design is not just what it looks like and feels like. Design is how it works" - Steve Jobs',
    '"I propose to consider the question, can machines think?" - Alan Turing',
];

btn.addEventListener("click", function() {
    var randomQuestion = questions[Math.floor(Math.random() * questions.length)]
    output.innerHTML = randomQuestion;
})