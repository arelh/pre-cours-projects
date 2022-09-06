const capitalize = (word)=>{ 
    const vowels = ['a','e','i','o','u','y'];
    const wordArray = word.split("");
    for (let i = 0; i < wordArray.length; i++){
        for (let j = 0; j < vowels.length; j++){
            if (wordArray[i].toLowerCase() === vowels[j]){            
                wordArray[i] = wordArray[i].toUpperCase();
                break;
            }
        }
    }
    return wordArray.join("");
}