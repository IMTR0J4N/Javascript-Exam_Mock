const e14 = (end = 10) => {
    let fibonacci = [];

    for (let i = 0; i <= end; i++) {
        if (i < 3) {
            fibonacci.push(i);
        } else {
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        }
    }

    console.log(fibonacci.join(" "));
}

e14(10)