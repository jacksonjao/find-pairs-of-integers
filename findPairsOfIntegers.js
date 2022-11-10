function findPairsOfIntegers(listIntegers, targetSum){
    listIntegers.sort((a, b) => a-b)
    let i = 0
    let j = listIntegers.length -1
    let areThereIntegersPair = false;
    while (i <= j) {
        if(listIntegers[i] + listIntegers[j] === targetSum) {
            console.log(listIntegers[i], listIntegers[j])
            areThereIntegersPair = true;
            i++;
        }
        else if(listIntegers[i] + listIntegers[j] < targetSum) i++
        else j--
    }
    if (!areThereIntegersPair) console.log('Pair of Integers not found');
}

findPairsOfIntegers([1,9,5,0,20,-4,12,16,7], 12)
