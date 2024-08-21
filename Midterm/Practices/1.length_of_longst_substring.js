function lengthOfLongestSubstring(s) {
  let set_str = s.split("");
  set_str = new Set(set_str);
  set_str = Array.from(set_str);
  let tra_cha = {};
  // console.log(set_str)
  for (let i of set_str) {
    // console.log(i)
    tra_cha[i] = 1;
  }
  // console.log(tra_cha)
  let right = 0;
  let left = 0;
  let best_start = 0;
  let best_end = Infinity;
  let count = set_str.length;
  while (right < s.length) {
    if (tra_cha[s[right]] !== undefined) {
      tra_cha[s[right]]--;
      if (tra_cha[s[right]] === 0) {
        count--;
      }
    }
    while (count === 0) {
      if (right - left + 1 < best_end) {
        best_start = left;
        best_end = right - left + 1;
      }
      if (tra_cha[s[left]] !== undefined) {
        tra_cha[s[left]]++;
        if (tra_cha[s[left]] > 0) {
          count++;
        }
      }
      left++;
    }
    right++;
  }

  return `Output: { maxlen: ${best_start-best_end} , longestSubstring: "${s.substring(best_start, best_start + best_end)}" }`;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring('bbbbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
console.log(lengthOfLongestSubstring(''))
