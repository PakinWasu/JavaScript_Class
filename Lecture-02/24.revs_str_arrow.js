function reversrString(value){
    let reversedValue = '';
    value.split('').forEach((char) =>{
        reversedValue =  char+reversedValue;
    });
    return reversedValue;
}

console.log(reversrString('Reverse Me'));