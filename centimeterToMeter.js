function centimeterToMeter(centimeter){
    if(typeof centimeter !== 'number'){
        console.log('give a number');
    }
    else{
        let meter = centimeter / 100;
        return meter;
    }
}
console.log(centimeterToMeter(650));