'use strict';

let agesArray = [8, 15, 100, 39, 57, 17, 19, 46];

function ages(agesArray){
    let filter = agesArray.filter(ages => ages >= 18);
    return filter;
}

alert(ages(agesArray));