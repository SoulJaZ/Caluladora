let display = document.getElementById('display');
let equation = '';

function addToDisplay(value){
    equation = equation + value;
    display.value = equation;
}
function clearDisplay(){
    equation = '';
    display.value = '';
}
function calcular(){
    try{
        let result = eval(equation);
        display.value = result;
        equation = result.toString();        
    }catch(error){
        display.value = 'Error';
        equation = '';
    }
}
