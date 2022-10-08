/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/


// MY Solution
function findShort(s){
  return Math.min(...s.split(" ").map(w => w.length))
}

// CLever
function findShort(s){
  return s
    .split(' ')
    .map(a => a.length)
    .reduce((a, b) => Math.min(a, b))
}
