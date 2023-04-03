const e17 = (str) => {
    let count = 0;

    const blacklist = "§!@#$%*()_-=+{}[]|<>?/.,;";
    for (let i = 0, l = str.length; i < l; i++) {
        for (let indexBlacklistC = 0; indexBlacklistC < blacklist.length; indexBlacklistC++) {
            const blacklistC = blacklist[indexBlacklistC];
            if (str[i] === blacklistC) count++;
        }
    }
    return count;
}

console.log(e17("§!@#$%*()test_-=+{}[]|<>?/.,;"));