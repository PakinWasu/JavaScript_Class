function processAndCombineString(string,lengthThreshold){
    let result = []
    let vowels = ['A','E','I','O','U']
    let count_vowels ={}
    for(let i of string){
        i = i.toUpperCase()
        for(let index in i){
            if(index >= lengthThreshold-1){
                count_vowels[i]=0
                break
            }
        }
    }
    for(let k in count_vowels){
        for(let char of k){
            if(vowels.includes(char)){
                count_vowels[k] += 1
            }
        }
    }

    for(let v in count_vowels){
    }
    console.log(count_vowels)
    return(result)
}

const string = ['apple','banana','cherry','date','fig','grape']
console.log(processAndCombineString(string,5))
console.log(processAndCombineString(string,6))
console.log(processAndCombineString(['hi','hello','world'],2))