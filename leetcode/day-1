var isValid = function(s) {
  if(s.length ===0)return true
  if(s.length %2==1)return false//if it's odd numbers

  let openingSequence =['(','[','{']
  let closingSequence = [')',']','}']
  let stack = []
  // console.log(stack)
  for(let i = 0 ; i < s.length; i++){
    let char = s[i]
    //check if the string has the closing tag
    if(closingSequence.indexOf(char) > -1) {
      //grab the matching open bracket
      let matchingOpener = openingSequence[closingSequence.indexOf(char)]
      if(stack.pop() !==matchingOpener){
        return false
      }
    }  else {
        stack.push(char)
      }
  }
    
  return (stack.length === 0)
};


isValid("{}}")



/**
 * Steps
 * 
 */