function linearSearch(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(linearSearch([1,2,34,77],34));