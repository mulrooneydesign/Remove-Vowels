function removeVowels(string) {
  
  let stringToArray = Array.from(string)

  let stringArrayNoVowels =  stringToArray.filter(function(e) {
   
    if(e.toLowerCase() != "a" && e.toLowerCase() != "e" && e.toLowerCase() != "i"  && e.toLowerCase() != "o"  && e.toLowerCase() != "u") {
      return e
    }
})
  
  let stringNoVowels = stringArrayNoVowels.join("")
  console.log(stringNoVowels)
  return stringNoVowels
}

//Example:
removeVowels("Hello there people. This is a sentence without Vowels.")