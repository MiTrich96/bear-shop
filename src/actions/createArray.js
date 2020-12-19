
export function createArray(count) {
    let array = [];
    for (let page = 1;page <= count;page++) {
        array.push(page);
    }
    return array;
}