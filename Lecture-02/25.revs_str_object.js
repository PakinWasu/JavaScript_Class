function reversedString(value){
    const reversedValue = value.split('').reverse().join('')
    return reversedValue
}

console.log(reversedString("Hello JS"));