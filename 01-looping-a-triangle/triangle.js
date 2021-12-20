
export function triangle() {
  let diez = '';
  let hashtag = [];

  for (let i = 0; i < 7; i++) {
    diez += "#";
    hashtag.push(diez);
  }
   return hashtag;
  }
  
 export function callTriangle() {
    return triangle().join('\n');
  }