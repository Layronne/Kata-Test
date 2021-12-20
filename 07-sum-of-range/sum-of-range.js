export function range(firstNbr, lastNbr) {
  let rangeNbr = [];
  for (let i = firstNbr; i <= lastNbr; i++){
    rangeNbr.push(firstNbr++);
 }
  return rangeNbr;
}

export function sum(firstNbr, lastNbr) {
  let rangeNbr = [];
  let add = 0;
  for (let i = firstNbr; i <= lastNbr; i++){
    rangeNbr.push(firstNbr++);
 }
  console.log(rangeNbr)
  for (let i = 0; i < rangeNbr.length; i++) {
    add += rangeNbr[i]
  }
  return add;
}
export function stepRange(firstNbr, lastNbr, step) {
  let rangeNbr = [];
  if(step == undefined) {
    step = 1;
  }
  if (step > 0) {
  for (let i = firstNbr; i <= lastNbr; i += step) {
    rangeNbr.push(i);
  }
  } else if (step < 0) {
    for (let i = firstNbr; i >= lastNbr; i += step) {
      rangeNbr.push(i);
      
    }
  }
  return rangeNbr
}
