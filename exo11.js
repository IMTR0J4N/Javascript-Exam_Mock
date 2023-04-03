const e11 = (arr) => {
    let res = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
        res += arr[i];
    }
    return res / arr.length;
}

console.log(e11([10, 5, 7, 9, 10, 30]));