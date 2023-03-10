let string = '';

let buttons = document.querySelectorAll('button');
let stringInput = document.querySelector('input');
let switchMode = document.querySelector('.mode');
let switchText = document.querySelector('.switchText');
let bodyContain = document.querySelector('.body');

buttons.forEach(btn => {

    btn.addEventListener('click', (e)=> {
        if(e.target.innerHTML == '='){
            string  = eval(string);
            stringInput.value = string;
        }else if(e.target.innerHTML == 'C'){
            string = '';
            stringInput.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length - 1);;
            stringInput.value = string;     
        }else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    }); 
 });