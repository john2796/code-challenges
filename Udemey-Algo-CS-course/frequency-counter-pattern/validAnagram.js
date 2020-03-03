function validAnagram(str1, str2) {
  // compare length
  if (str1.length !== str2.length) return

  // follow frequency pattern
  let obj1 = {}
  let obj2 = {}

  // store str to obj
  for (let letter of str1) {
    // count how many times letters dups
    obj1[letter] = ++obj1[letter] || 1
  }
  for (let letter of str2) {
    // count how many times letters dups
    obj2[letter] = ++obj2[letter] || 1
  }

  // loop str1
  for (let key in obj1) {
    // compare key values
    if (!(key in obj2)) {
      return false
    }
    // compare count of letters values
    if (obj2[key] !== obj1[key]) {
      return false
    }
  }

  // return true if all case passes
  return true
}

validAnagram(" ", " ")
validAnagram("aaz", "zza")
validAnagram("anagram", "nagaram")


function validAnagram(first, second){
  if(!first.length !== second.length) return false;
  const lookup = {}
  // loop first str
  for (let i = 0 ; i < first.length; i++){
    let letter = first[i]
    // if letter exists ,increment ,o therwise set to 1
    lookup[letter] = ++lookup[letter] || 1
  }
 for(let i =0; i < second.length; i++){
   let letter second[i]
   // can't find letter or letter is zero then it's not an    anagram
   // when encounter with 0 falsey return false
   if(!lookup[letter]){
     return false
   } else {
     // ? subtract 1 untill it's sets to 0
     lookup[letter] -= 1
   }
 }
return true;
}




/**
 * Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.

You can use each character in text at most once. Return the maximum number of instances that can be formed.

 
 * @param {string} text
 * @return {number}
 
 form as many instances of the word "balloon" as possible
 */
var maxNumberOfBalloons = function(text) {
  let str = "balloon"
  let balloon ={}
  let count = 0
  
  for(let i = 0; i<str.length;i++){
      let char = str[i]
      balloon[char] = ++balloon[char] || 1
  }
  
let obj = {}
for(let i = 0; i<text.length;i++){
    let char = text[i]
      obj[char] = ++obj[char] || 1
  }
  
  
// { b: 1, a: 1, l: 2, o: 2, n: 1 }  
// { n: 1, l: 2, a: 1, e: 1, b: 1, o: 2, k: 1 } 
let len = str.length - 1
let flag = true
while(flag){
  for(let key in balloon){
      // check if key match 
      if(obj[key] < 2 ) flag = false
      if(obj[key]){
          // check actual values
//             console.log('values', obj[key] , balloon[key])
//             console.log(len)
          if(obj[key] >= balloon[key]) {
              len--
              if(len === 1) {
                count++
                len = str.length - 1
              }
          }
          obj[key] -= balloon[key]
      } else {
        flag = false
      }
  }
}
  // reset len
  len = str.length -1
return count
  
};
// maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw") // 10
// maxNumberOfBalloons("leetcode")
// maxNumberOfBalloons("loonbalxballpoon")
