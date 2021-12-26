const randomArrayGenerator = ( length ) => {
    let randomArr = [];
    do{
        let randomInt = Math.floor(Math.random() * (length - 0) + 0);
            if(randomArr.indexOf(randomInt) === -1){
                randomArr.push(randomInt);
            }
    }while(randomArr.length !== length);
    return randomArr;
}

const stringCreator = (str) => {
    let newString = [];
    const indexes = randomArrayGenerator(str.length);
        for(let i = 0; i < str.length; i++){
            newString.push(str[indexes[i]]);
        }
    newString = newString.join('');
    return newString;
}

const checkPalindrome = (str) => {
    const reverse = str.split('').reverse().join('');
    if(str === reverse){
        return true;
    }
    return false;
}


const swapPalindrome = (str) => {
    let newString;
    let count = 0;
    let possiblePalindromes = [];
    do{
        newString = stringCreator(str);
        count++;
        if(checkPalindrome(newString) && !possiblePalindromes.includes(newString)){
            possiblePalindromes.push(newString);
        }
    }while(!possiblePalindromes.includes(newString));
    console.log(possiblePalindromes);
    console.log(count)
}

swapPalindrome('ccivi');