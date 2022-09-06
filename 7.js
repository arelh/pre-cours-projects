const primeNumberFromOneToN = (n)=>{ 
    const IsPrime=(x)=> {
        for(let j=2; j<=Math.sqrt(x); j++){
            if (x%j == 0){
                return false
            } 
        }
        return true
    }

    let count=0;
    for (let i=2; i<n; i++){
        if (IsPrime(i)){
            count++;      
        }
    }

    return count;
}



