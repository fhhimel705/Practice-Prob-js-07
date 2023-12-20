/*
Take random numbers as input and if its not number give 'give a number' as output and also give odd or even as output.
*/
function oddEven(number){
    if(typeof number !== 'number'){
        console.log('give a number');
    }
    else if(number % 2 == 0){
        console.log('even');
    }
    else{
        console.log('odd');
    }
}
oddEven(11);