const e18 = (str) => {
    const nbrs = str.split(";");
    let allNbrs = 0;
    for (let i = 0, l = nbrs.length; i < l; i++) {
        const note = parseInt(nbrs[i], 10);
        allNbrs += note;
    }

    return allNbrs / nbrs.length;
}

console.log(e18("34;22;11;5"));