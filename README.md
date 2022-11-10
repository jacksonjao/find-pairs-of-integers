# Find Pairs Of Integers Function
The algorithm to find the pairs must be faster than O(n^2). All edge cases
should be handled appropriately. This is _not_ a closed book test. You are
encouraged to reach out with any questions that you come across.

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
+ 12,0
+ 5,7
+ 16,-4
```
