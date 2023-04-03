const e13 = (arr) => {
    let res = arr[0];
    for (let i = 0, l = arr.length; i < l; i++) {
        if (arr[i] > res) { res = arr[i] };
    }
    return res;
}

console.log(e13([25, 40, -4, 45, -2, -7]));