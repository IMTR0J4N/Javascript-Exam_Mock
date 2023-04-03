let str = '';

for (let i = 1, l = 100; i <= l; i++) {
    if (i % 2 !== 0) {
        str += `${i} `
    }
}

console.log(str);