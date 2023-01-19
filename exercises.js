// Question 1
const isUpperCase = (str) => {
  return str === str.toUpperCase();
};

// Question 2
const removeVowels = (arr) => {
  return arr.map(ele => ele.replaceAll(/[aeiou]/gi, ""));
};

// Question 3
const wordCap = (str) => {
  return str.split(" ").map(ele => ele[0].toUpperCase() + ele.slice(1, ele.length).toLowerCase()).join(" ");
};

// Question 4
const swapCase = (str) => {
  return str.split("").map(ele => ele.match(/[A-Z]/g) ? ele.toLowerCase() : ele.toUpperCase()).join("");
};

// Question 5
const staggeredCase = (str) => {
  let check = true;
  let newStr = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++){
    if(str[i].match(/[a-z]/gi)) {
      newStr += check ? str[i].toLowerCase() : str[i].toUpperCase();
      check = !check;
    }else{
      newStr += str[i];
    }
  }
  return newStr;
};

// Question 6
const wordLengths = (str) => {
  return str ? str.split(" ").map(ele => ele + " " + ele.length) : [];
};

// Question 7
const searchWord = (word, str) => {
  return str.split(" ").filter(ele => ele.toLowerCase().replaceAll(/[^a-z0-9\-]/ig, "") === word).length
};


// The code below ensures that this file can talk to our test file.
module.exports = {
  isUpperCase,
  removeVowels,
  wordCap,
  swapCase,
  staggeredCase,
  wordLengths,
  searchWord,
};
