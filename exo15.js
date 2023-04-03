const e15 = (n) => {
    const numStr = n.toString();
    let res = 0;

    for (let i = 0, l = numStr.length; i < l; i++) {
        res += parseInt(numStr[i], 10);
    }

    return res;
}

console.log(e15(145674));