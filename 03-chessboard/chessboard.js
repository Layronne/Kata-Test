function ligne(char1, char2){
    let ligne = "";
    let hashtag = char1;
    let space = char2;

    for (let i = 1;  i < 9; i++) {
        if( i % 2 == 0) {
            ligne += hashtag;
        } else {
            ligne += space;
        }
        
    }
    console.log(ligne)
}
for (let j = 1; j < 9; j++){
    if( j % 2 == 0) {
        ligne( " ", "#");
    } else {
        ligne( "#", " ");
    }
}
