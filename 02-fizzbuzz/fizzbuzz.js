  export function fizz(n) {
    let str = '';
     if (n % 3 == 0)  {
        str += 'fizz';
      } if (n % 5 == 0) {
        str += 'buzz';
      } if (str === ''){
        str += n;
    }
    return str
      
      }
      
      
      