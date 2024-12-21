const display = document.querySelector('.display');
function appendValue(n){
  const operators = ['+','-','*','/'];
  const lastChar = display.value.slice(-1);
  if(operators.includes(lastChar)&&operators.includes(n)){
    return;
  }
  if(display.value.length === 0 && (n == '*'|| n== '/' || n== '+')){
    return;
  }
  display.value = display.value + n;
  }

function clear_btn(){
  display.value = '';
}
function calculate(){
  display.value = eval(display.value);
}