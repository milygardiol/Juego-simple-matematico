let score = 0
let timer ;
let correctAnswer ;
let level = 1;
let time = 0;

function generateEquation() {
    //genera dos números random de acuerdo al nivel

    const num1 = Math.floor(Math.random()*10*level)+1;
    const num2 = Math.floor(Math.random()*10*level)+1;

    //seleccona un operador random
    //array con los operadores
    operators = ["+", "-", "*", "/"]

    //elije un operador random
    const operator = operators[Math.floor(Math.random() * operators.length)];   

    let equation = num1 + " " + operator + " " + num2 + " = ?";

    document.getElementById("equation").innerText = equation;

    switch(operator) {
        case "+":
            correctAnswer = Number(num1)+Number(num2);
            break;
        case "-":
            correctAnswer = Number(num1)-Number(num2);
            break;
        case "*":
            correctAnswer = Number(num1)*Number(num2);
            break;
        case "/":
            correctAnswer = Number(num1)/Number(num2);
            break;
    }
    //si la respuesta no está integrada o es negativo, genera otra ecuación
    if(!Number.isInteger(correctAnswer)|| correctAnswer < 0) {
        console.log("old equation", equation)
        generateEquation();
        
    }

    console.log("Correct answer", correctAnswer)
    
}

function checkAnswer() {
    //chequear si la respuesta es correcta

    const answer = Number(document.getElementById("answer").value)

    if(answer === correctAnswer){
        //actualizar la puntuación
        score++
        document.getElementById("score").textContent = score;

        //subir de nivel
        if(score > level * 10) {
            level +=1
            document.getElementById("level").innerText = level;
        }

        //generar otra ecuación
        generateEquation()
        document.getElementById("answer").value = ""
    }
}

function startTimer() {
    time = 0;
    timer = setInterval(() => {
            time ++;
            document.getElementById("time").textContent=time
        }, 1000)
}


generateEquation();
startTimer();