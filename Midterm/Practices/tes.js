function lengthOfLongestSubstring(s) {
    let set_str = s.split("");
    set_str = new Set(set_str);
    set_str = Array.from(set_str);
    let tra_cha = {};
    for (let i of set_str) {
      tra_cha[i] = +1;
    }
    if( s === ''){
            return s
        }
    if(set_str.length === 1){
        
        return s[s.length-1]
    }
    let right = set_str.length-1;
    let left = 0;
    let count_wi = right
    let chk = 0
    // while (right < s.length){
        let use_tra_cha =tra_cha
        for(let i = left;i <= count_wi;i++){
            if (set_str.indexOf(s[i]) === set_str.lastIndexOf(s[i])){
                use_tra_cha[s[i]]--
            }
            for(k of set_str){
                if(use_tra_cha[k] == 0 || 1){
                    chk = chk+  use_tra_cha[k]
                }
            }
            
            
            
        }
        console.log(chk)
    //     left++
    //     right++
    // }

    
  }
  
//   console.log(lengthOfLongestSubstring("abcabcbb"));
//   console.log(lengthOfLongestSubstring('bbbbb'))
  console.log(lengthOfLongestSubstring('pwwkew'))
//   console.log(lengthOfLongestSubstring(''))
//   console.log(lengthOfLongestSubstring(' '))

  