const e8 = () => {
    let res = 0;

    for (let i = 10, l = 30; i <= l; i++) {
        if (i % 2 === 0) { res += i };
    };

    return res;
}

console.log(e8());