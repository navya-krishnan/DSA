function reverse(str,n){
    if(n<=0){
        return " "
    }
    return str[n-1] = str[n-1] + reverse(str,n-1)
}

console.log(reverse('navya',5));