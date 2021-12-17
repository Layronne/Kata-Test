
function range(firstNbr, lastNbr) {
  let rangeNbr = [];
  for (let i = firstNbr; i <= lastNbr; i++){
    rangeNbr[i] = firstNbr++;
 }
  return rangeNbr;
}

function sum(firstNbr, lastNbr) {
  let rangeNbr = [];
  let add = firstNbr;
  for (let i = firstNbr; i <= lastNbr; i++){
    rangeNbr[i] = firstNbr++;
 }
  for (let i = 0; i < rangeNbr.length; i++) {
    add += rangeNbr[i]
  }
  return add;
}
