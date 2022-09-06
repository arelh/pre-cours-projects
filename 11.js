const minNumberInArr = (arr)=>{
    let minNumber =arr[0]
    for(i=0;i<arr.length;i++){
        if(arr[i]<minNumber){
        minNumber=arr[i]}
    }
    return minNumber;
    
    }