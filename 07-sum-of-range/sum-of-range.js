function range(firstNbr, lastNbr) {
  let rangeNbr = [];
  for (let i = 0; i < lastNbr; i++){
    rangeNbr[i] = firstNbr++;
 }
  return rangeNbr;
}

