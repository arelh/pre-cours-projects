const longestWord = (sentence)=>{
    let words = sentence.split(" ");
    let longest = 0;
    let longestWord;
    for (let i=0; i < words.length ; i++) {
        const filteredWord = filterDigits(words[i])
        if (longest < filteredWord.length) {
            longest = filteredWord.length;
            longestWord = filteredWord;
        }
    }
    return longestWord;
}

const filterDigits=(w)=>{
    let chars = []
    for(let i=0; i<w.length; i++){
        if(w[i].match(/[a-z]/i)){
            chars += w[i]
        }
    }
    return chars;
}