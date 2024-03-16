
function checkSnake(path: number[], current: number, num: number, snakes: [number, number][]): number {
    let maxNext = 6;
    let next = current + 6;

    while (true) {
        if (!(!snakes.find(x => x[0] == next))) {
            next--;
            maxNext--;
        } else {
            path.push(maxNext);
            break;
        }
    }

    num -= maxNext;
    current += maxNext;

    if (num > 6) {
        checkSnake(path, current, num, snakes);
    }

    path.push(num);
    current += num;

    return current;
}

function quickestPath(board: { ladders: [number, number][]; snakes: [number, number][]; }): number[] {
    let current: number = 1;
    const end: number = 100;
    let path: number[] = [];
    let num: number = 0;
    for (let i = 0; current != 100; i++) {
        if (i < board.ladders.length) {
            if (current < board.ladders[i][0]) {
                num = board.ladders[i][0] - current;
            } else {
                continue;
            }
        } else {
            num = 100 - current;
        }

        if (num > 6) {
            current = checkSnake(path, current, num, board.snakes)
        } else {
            path.push(num);
            current += num;
        }
        if (i < board.ladders.length) {
            let find = board.ladders.find(x => x[0] == current);
            if (find) {
                current = find[1];
            }
        }
    }

    return path;
}






var a = quickestPath({
    ladders: [[3, 39], [14, 35], [31, 70], [44, 65], [47, 86], [63, 83], [71, 93]],
    snakes: [[21, 4], [30, 8], [55, 38], [79, 42], [87, 54], [91, 48], [96, 66]]
});

var b = quickestPath({
    ladders: [[4, 14], [8, 30], [21, 42], [28, 76], [50, 67], [71, 92], [80, 99]],
    snakes: [[32, 10], [36, 6], [48, 26], [62, 18], [88, 24], [95, 56], [97, 78]]
})

var c = quickestPath({
    ladders: [[4, 25], [13, 46], [33, 49], [42, 63], [50, 69], [62, 81], [74, 92]],
    snakes: [[27, 5], [40, 3], [43, 18], [54, 31], [66, 45], [76, 58], [89, 53], [99, 41]]
})


console.log('Ladders a : ', a);
console.log('Ladders b : ', b);
console.log('Ladders c : ', c);

// // === [ 2, 5, 6, 6, 1 ]
// // // คํา ตอบอนื่ ทถี่ กู กม็ ีเชน่ [ 2, 5, 6, 5, 2 ] เพราะโยนหา้ครัง้เทา่ กนั
