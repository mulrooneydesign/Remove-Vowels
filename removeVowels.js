function removeVowels(string) {
  
   //Turn string into a array
  let stringArray = Array.from(string);

  //Function to check is string contains vowels
  let stringArrayNoVowels =  stringArray.filter(function(e) {
   
    if(e.toLowerCase() != "a" && e.toLowerCase() != "e" && e.toLowerCase() != "i"  && e.toLowerCase() != "o"  && e.toLowerCase() != "u") {
      return e;
    }
});
  
  let finalArray = stringArrayNoVowels.join("");  
  console.log(finalArray);
  return finalArray;
}

removeVowels("Hello there people. This is a sentence without Vowels.");