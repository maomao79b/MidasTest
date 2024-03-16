function getQuestionPart(phrases: string[]): string[] {
    let prefixArray: string[] = [];
    let prefix = '';

    for (let i = 0; i < phrases[0].length; i++) {
        prefix = ''
        for (let j = i; j < phrases[0].length; j++) {
            const char = phrases[0][j];
            const prefixTest = prefix + char;
            if (phrases.every(word => word.includes(prefixTest))) {
                prefix += char;
            } else {
                break;
            }
        }
        if (prefix != '') {
            prefixArray.push(prefix);
        }
    }

    prefix = prefixArray.reduce((acc, curr) => {
        return curr.length > acc.length ? curr : acc;
    })
    let newArray:string[] = phrases.map(word => word.replace(prefix, ""))
    newArray = newArray.map(word => word.replace(/\s/g, ""))
    return newArray;
}

var arr1 = ["BATHROOM", "BATH SALTS", "BLOODBATH"];
var arr2 = ["BEFRIEND", "GIRLFRIEND", "FRIENDSHIP"];

console.log(getQuestionPart(arr1))
console.log(getQuestionPart(arr2))
