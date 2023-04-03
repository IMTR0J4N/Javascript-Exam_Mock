const e12 = (arr) => {
    let res = [];

    for (let i = 0, l = arr.length; i < l; i++) {
        if (arr[i] > 0) res.push(arr[i]);
    }

    return res;
}

console.log(e12([2, 4, -6, 7, -62, 10, 20, -2]));