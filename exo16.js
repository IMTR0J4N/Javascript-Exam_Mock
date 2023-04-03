const e16 = (arr) => {
    const firstElement = arr[0];
    const endElement = arr[arr.length - 1];
    const newArr = arr;

    arr.shift()
    arr.pop()
    arr.unshift(endElement)
    arr.push(firstElement);

    return newArr;
}

console.log(e16([1, 2, 3, 4, 8]));