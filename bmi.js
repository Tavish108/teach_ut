function bmical(wt, ht) {
    var bmi = wt / (ht * ht);
    return Math.round(bmi);
}

var bmi = bmical(65, 1.65);
console.log(bmi);
