const divideOrHasSeven = (start,end)=>{ 
    let counter=0
  
   for(let i=start;i<end;i++){
     if (i%7==0 || Math.floor(i/10)==7||i%10==7){
         counter++;
     }
   }
   
        return counter;

}