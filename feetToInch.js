function feetToInch(feet){
    if(typeof feet !== 'number'){
        console.log('give a number');
    }
    else{
        let inch = feet * 12;
        console.log(inch);
    }
}
feetToInch('20');