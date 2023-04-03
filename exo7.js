const e7 = () => {
    let res = 1

    for (let i = 1, l = 10; i <= l; i++) {
        res *= i
    }

    return res
}

console.log(e7());