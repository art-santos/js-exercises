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

console.log(randomArrayGenerator(3));