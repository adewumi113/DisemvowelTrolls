//https://www.codewars.com/kata/52fba66badcd10859f00097e

// DESCRIPTION:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let p = str.split('')
  //loop through the string
  for (i = 0; i < p.length; i++) {
  //if a vowel is found, remove it
    if (p[i] == "a" | p[i] == "e" | p[i] == "i" | p[i] == "o" | p[i] == "u" | p[i] == "A" | p[i] == "E" | p[i] == "I" | p[i] == "O" | p[i] == "U") {
      delete p[i]
    }
  }
  return p.join('');
}
disemvowel("This website is for losers LOL!") //Ths wbst s fr lsrs LL!