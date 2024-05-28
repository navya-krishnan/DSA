function fibanocci(n){
    if(n < 2){
        return n
    }
    return fibanocci(n-1) + fibanocci(n-2)
}

console.log(fibanocci(0));
console.log(fibanocci(1));
console.log(fibanocci(2));
console.log(fibanocci(3));
console.log(fibanocci(4));