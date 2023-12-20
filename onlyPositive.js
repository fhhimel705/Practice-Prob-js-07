let numbers = [11, 12, -5, 9 ,-8 ,10 ,-98];
let positiveNum = [];

function onlyPositive(numbers){
    for(i=0; i<numbers.length; i++){
        if(numbers[i] < 0){
            continue;
        }
        else{
            positiveNum.push(numbers[i]);
        }
    }
    console.log(positiveNum);
}

onlyPositive(numbers);