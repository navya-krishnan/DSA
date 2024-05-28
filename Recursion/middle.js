function binarySearch(arr,target){
    let leftIndex = 0
    let rightIndex = arr.length-1

    while(leftIndex <= rightIndex){
        let middle = Math.floor((leftIndex+rightIndex)/2)

        if(target === arr[middle]){
            return middle
        }

        if(target < arr[middle]){
            rightIndex = middle - 1
        }

        if(target > arr[middle]){
            leftIndex = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5],2));

