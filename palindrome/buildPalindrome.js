//----------------------------------------------------------------
const createPalindrome = (str) => {
    const reverse = str.split('').reverse().join('');
    return reverse;
}
//----------------------------------------------------------------
const checkPalindrome = (str) => {
    if(str === createPalindrome(str)){
        return true;
    }else{
        return false;
    }
};
//----------------------------------------------------------------
const randomArrayGenerator = ( length ) => {
    let randomArr = [];
    do{
        let randomInt = Math.floor(Math.random() * (length - 0) + 0);
            if(randomArr.indexOf(randomInt) === -1){
                randomArr.push(randomInt);
            }
    }while(randomArr.length !== 2);
    return randomArr;
}
//----------------------------------------------------------------
const palindromeFilter = (str) => {
    const filterArray = randomArrayGenerator(str.length);
    const filtered = str.split('');
    for(let i = 0; i < filterArray.length; i++){
        filtered[filterArray[i]] = '';
    }
    return filtered.join('');
}
//----------------------------------------------------------------
const palindromeSwap = (str) => {
    let newString;
        if(checkPalindrome(str)){
        return str;
    }else{
        do{
            newString = palindromeFilter(str);
        }while(!checkPalindrome(newString));
    }
    return newString;
}
//----------------------------------------------------------------
console.log(palindromeSwap('cdivic'));