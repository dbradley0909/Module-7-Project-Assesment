//1) Sum Zero

sumToZero = false;

function sumZero([...numbers]){
  for(let i = 0; i< numbers.length; i++){
  for(let j = 0; j< numbers.length; j++){
if (numbers[i] + numbers[j] === 0){
sumToZero = true;
}
}
}
if (sumToZero == true){
  return true;}
else {
  return false;
}

}

sumZero([0])

//

sumToZero = false;

function sumZero([...numbers]){
  for(let i = 0; i< numbers.length; i++){
  for(let j = 0; j< numbers.length; j++){
if (numbers[i] + numbers[j] === 0){
sumToZero = true;
}
}
}
if (sumToZero == true){
  return true;}
else {
  return false;
}

}

sumZero([]);
sumZero([0,1]);
sumZero([1,2,2,3]);
sumZero([1,-2,2,3]);

// the run time of this is  O(n^2).
//the space time is also  O(n^2).
// and it is running on quadratic time and quadratic space

//2)Unique Characters
function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length;
  }
  
   hasUniqueChars('caandy');

// the run time of this is  O(n).
//the space time is also  O(n).
// and it is running on Linear Time and linear space


//3)Pangram Sentence

function isPangrams(letters) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\letters/g;
    let lowercase = letters.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "false";
     }
    }
   
   return "true";
 }
 
 isPangrams("The quick brown fox jumps over the lazy dog!")
 isPangrams("The quick brown fox bites the lazy dog!")

// the run time of this is  O(n).
//the space time is also  O(n).
// and it is running on Linear Time and linear space

//4)Pangram Sentence

function theLongestWord(longw) {
    var str = longw.split(" ");
    var longest = 0;
    var word = null;
    for (var i = 0; i < str.length; i++) {
        if (longest < str[i].length) {
            longest = str[i].length;
            word = str[i];
        }
    }
    return word;
}
theLongestWord("The quick brown fox jumped over the moon and back ");

// the run time of this is O(1).
//the space time is also  O(n).
// and it is running on Linear Time and linear space