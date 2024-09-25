function findAndCountLongestWord(sentence) {
    let arr_sentence = sentence.split(' ')
    let result = {}
    let long_word = ''
    let count = 0
    let out = {word:"",count: 0}
    for (let i of arr_sentence) {
        if (i.search(',') == -1) {
            if (!result[i]) {
                result[i] = 1
            } else {
                result[i] = result[i] + 1
            }
        }
    }
    for (let key in result) {
        if (key.length >= long_word.length && result[key] >= count)
            long_word = key
            count = result[long_word]
    }
    out.word = long_word
    out.count = count
    return out
}
console.log(findAndCountLongestWord("The quick brown fox jumps over the lazy dog and the fox runs away"))
console.log(findAndCountLongestWord("JavaScript is a versatile programming language, and JavaScript widely used"))
console.log(findAndCountLongestWord("Coding is fun, and coding helps solve problems, coding coding coding"))
console.log(findAndCountLongestWord("I love pizza, pizza is the best"))


