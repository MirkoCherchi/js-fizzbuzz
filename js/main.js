'use strict'; 

const lista = document.querySelector('.list-ul');

for (let conta = 1; conta <= 100; conta++) {
    
    let li = document.createElement('li')
    
    if (conta % 15 === 0){
        console.log('FizzBuzz');
        li.append('FizzBuzz');
        li.classList.add('yellow');

    }else if (conta % 5 === 0){
        console.log('Buzz');
        li.append('Buzz');
        li.classList.add('green');
        
    }else if (conta % 3 === 0){
        console.log('Fizz');
        li.append('Fizz');
        li.classList.add('red');
       
    }else {
        console.log(conta) ;
        li.append(conta);  
    } 

    lista.append(li);

}         



