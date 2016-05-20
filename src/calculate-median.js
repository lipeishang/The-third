function pushEvenNum(arr) {
    var count = 0;
    var evenNumArr = [];

    for(var i = 0; i < arr.length; i++){
        count++;
        if(count % 2 == 0){
            evenNumArr.push(arr[i]);
        }
    }

    return evenNumArr;
}

function quantityIsEven(evenNumArr) {
    var medianNumE = (evenNumArr[(evenNumArr.length)/2 - 1] + evenNumArr[(evenNumArr.length/2 )])/2;

    return medianNumE;
}

function quantityIsOdd(evenNumArr) {
    var medianNumO = evenNumArr[((evenNumArr.length) + 1)/2 - 1];

    return medianNumO;
}

function calculate_median(arr) {
    var evenNumArr = pushEvenNum(arr);
    var median = 0;
    
    if (evenNumArr.length % 2 == 0 ) {
        return median = quantityIsEven(evenNumArr);
    }
        
    else {
        median = quantityIsOdd(evenNumArr);
        return median;
    }
}

module.exports = calculate_median;
