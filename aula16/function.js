function parimp(n) {
    if (n%2 == 0) {
        return `par!`
    } else {
        return `impar!`
    }
}

let res = parimp(1112)
console.log(res)