export function countBs(char) {
  var count = 0;
  for (let i = 0; i < char.length; i++) {
    if (char.charAt(i) == "B") {
      count++;
    }
  }
  return count;
}




export function countChar(char1, char2) {
  var count = 0;
  for (let i = 0; i < char1.length; i++) {
    if (char1.charAt(i) === char2) {
      count++;
    }
  }
  return count;
}
