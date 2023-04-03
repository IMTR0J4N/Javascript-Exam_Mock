let str = '';

for (let i = 1, l = 10; i <= l; i++) {
    for (let j = 1, L = 10; j <= L; j++) {
        str += `${i * j} `
    }
}

console.log(str);