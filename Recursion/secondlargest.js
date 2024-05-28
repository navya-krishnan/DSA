function secondLargest(arr){
    let large = -Infinity
    let secLarge = -Infinity
    for(i=0;i<arr.length;i++){
        if(arr[i] > large ){
            large = arr[i]
            secLarge = large
        }else{
            secLarge = arr[i]
        }
    }
    return secLarge
}

console.log(secondLargest([-20,-30,-200,-50,20]))