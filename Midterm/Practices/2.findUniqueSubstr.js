function findUniqueSubstrings(str1, str2, length) {
  const result = new Set();

  for (let i = 0; i <= str1.length - length; i++) {
    const substring = str1.slice(i, i + length);
    if (!str2.includes(substring)) {
      result.add(substring);
    }
  }

  return Array.from(result);
}

console.log(findUniqueSubstrings("abcdefabcdef", "acdfgacdfg", 3));
// Output: [ 'abc', 'bcd', 'cde', 'def', 'efa', 'fab' ]

console.log(findUniqueSubstrings("hellohello", "helloworld", 2));
// Output: [ 'oh' ]

console.log(findUniqueSubstrings("javascriptjs", "scriptjava", 4));
// Output: [ 'avas', 'vasc', 'ascr', 'ptjs' ]

console.log(findUniqueSubstrings("aaaaaa", "aaaaaa", 2));
// Output: []