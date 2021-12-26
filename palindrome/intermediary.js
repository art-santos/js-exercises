const palindromeChecker = (str) => {
    let isDifferent = [];
    const reversed = str.split('').reverse().join('');

    for(let i = 0; i < str.length; i++) {
        if(str[i] !== reversed[i]) {
            isDifferent.push(i);
        }
    }
    if(isDifferent.length <= 2){
    const filtered = (str.split('').filter((char, index) => isDifferent.indexOf(index) === -1)).join('');
    return filtered;
    } else if (reversed == str) {
        return reversed;
    }else{
        return false;
    }

}

console.log(palindromeChecker('civic'));