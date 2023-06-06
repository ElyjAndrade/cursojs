/* fatorial forma recursiva 
5 x 4 x 3 x 2 x 1 
ou seja a mesma coisa que 5 x 4 fatorial

*/

//recursividade

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))

