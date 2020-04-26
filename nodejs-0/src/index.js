'use strict'

const fibonacci = () => {
    let sequence = [];
    let position = 0;

    do {
        for (let i = position; i <= position; i++) {
            if (sequence.length >= 2) {
                sequence.push(sequence[i - 1] + sequence[i - 2]);

            } else {
                sequence.push(i)
            }
        }
        position++
    } while (sequence[position - 1] < 350)

    return sequence
}

const isFibonnaci = (num) => fibonacci().some((item) => { return item === num })

module.exports = {
    fibonacci,
    isFibonnaci
}
