export function ligne(){
    let tabLigne = [];
    let hashtag = "#";
    let space = ' ';

  for (let j = 1; j < 9; j++) {
    let ligne = '';
    if ( j % 2 == 0) {
      hashtag = " ";
      space = "#";
    } else {
      hashtag = "#";
      space = " ";
    }
    for (let i = 1;  i < 9; i++) {
        if( i % 2 == 0) {
            ligne += hashtag;
        } else {
            ligne += space;
        }
      }
    tabLigne.push(ligne)
}
  return tabLigne
}
export function callLigne() {
  return ligne().join('\n')
}


