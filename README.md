# Find Pairs Of Integers Function
function that finds pairs of integers from a list that
sum to a given value. The function will take as input the list of numbers as
well as the target sum.

### Code
```javascript
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
```

### How to use the function
```javascript
  findPairsOfIntegers([1,9,5,0,20,-4,12,16,7], 12)
```

### Sample output is shown below.
```
> findPairsOfIntegers([1,9,5,0,20,-4,12,16,7], 12)
+ 4 16
+ 0 12
+ 16 -4
```
