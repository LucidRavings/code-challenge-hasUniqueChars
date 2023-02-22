
function wordCheck(word) {
    let placeHolder = word.split("")
    for (i = 0; i < word.length; i++){
        let test = placeHolder[i];
        if (test in placeHolder) {
            return false;
        }
        placeHolder[test] = false;
    }
    return true;
}
console.log(wordCheck("Happy"))