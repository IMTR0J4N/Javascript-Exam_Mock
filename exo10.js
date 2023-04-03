const exo10 = (arr) => {
    let res = 0;

    for (let i = 0, l = arr.length; i < l; i++) {
        res += arr[i];
    }

    return res;
}

console.log(exo10([1, 5, 7, 2, 8]));