var num2 = "";
var num1 = "";
var op = "";
var displayDiv = document.querySelector("#display");



function press(element){
    // grab the value of the input of the button
    num1 = num1 + element;
    displayDiv.innerText = num1;
    
    
    // val = number.push;
    // return number;
}

function clr(){
    // reset the displayDiv back to 0
    num1 = "";
    num2 = "";
    op = "";
    displayDiv.innerText = "0";

}

function setOP(operation){
    //use a math operator
    op = operation;
    displayDiv.innerText = op;
    num2 = num1;
    num1 = "";
    
}

function calculate(){
    // change innertext to the end math operation
    var a = parseInt(num1);
    var b = parseInt(num2);
    var solution = 0;
    switch(op){
        case "+":
            solution = a + b;
            break;
        case "-":
            solution = a - b;
            break;
        case "/":
            solution = b / a;
            break;
        case "*":
            solution = a * b;
            break;
    }
    
    
    num1 = solution;
    op = "";
    displayDiv.innerText = solution;





}


// set the value in the head



// how to know when to send second value?\
// 