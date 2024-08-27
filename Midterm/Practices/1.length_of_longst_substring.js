function lengthOfLongestSubstring(s) {
  if (s.length === 0) return `{ maxLen: ${0}, longestSubstring: "" }`

  let char = new Map();
  let start = 0;
  let max_length = 0;
  let duplicate_str = "";

  for (let end = 0; end < s.length; end++) {
      if (char.has(s[end])) {
          start = Math.max(char.get(s[end]) + 1, start);
      }

      char.set(s[end], end);
      let current_length = end - start + 1;
      if (current_length > max_length) {
          max_length = current_length; 
          duplicate_str = s.substring(start, end + 1);
      }
  }


  // console.log(max_length)
  return `{ maxLen: ${max_length}, longestSubstring: "${duplicate_str}" }`
}

console.log(lengthOfLongestSubstring("abcabcbb"));
// console.log(lengthOfLongestSubstring('bbbbb'))
// console.log(lengthOfLongestSubstring('pwwkew'))
// console.log(lengthOfLongestSubstring(''))
