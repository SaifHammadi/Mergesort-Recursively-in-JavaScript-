// --------------------- Mergesort recursively in js ---------------------------

function mergeSort(arr) {
    // For merge sort, we'll do this in two phases.
    // Phase 1: Splitting the unsorted array into multiple sub-arrays.
    // the base case where we should stop splitting.
    if (arr.length === 1) {
        return arr
    }
    else {
        let midPoint = Math.floor(arr.length / 2)
        let leftArr = arr.slice(0, midPoint)
        let rightArr = arr.slice(midPoint, arr.length)
        // Phase 2: Merging the arrays in sorted order nad has its own function
        return mergeTwoArrays(mergeSort(leftArr), mergeSort(rightArr))
    }
    function mergeTwoArrays(leftArr, rightArr) {
        let sortedArr = []
        while(sortedArr.length !== arr.length) {
            if (leftArr[0] && rightArr[0]) {
                if (leftArr[0] < rightArr[0]) {
                    sortedArr.push(leftArr.shift())
                } else {
                    sortedArr.push(rightArr.shift())
                }
            } else if (leftArr.length === 0) {
                sortedArr.push(rightArr.shift())
            } else if (rightArr.length === 0) {
                sortedArr.push(leftArr.shift())
            }
        }
        return sortedArr
    }
}

console.log(mergeSort([45, 8, 3, 1, 99, 3])) // Occurance of the same item multiple times
console.log(mergeSort([45, 8, 12, 1, 99, 3])) // Positive integers
console.log(mergeSort([-4, -5, -100, -1, -895])) // Negative integers
console.log(mergeSort([9, 1])) // Fastest sort possible
console.log(mergeSort([1])) // Smallest array possible
