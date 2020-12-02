let num = [
    9,
    30,
    5,
    1,
    7
]

let pos = num.indexOf(7)
console.log(`${pos}`)

for (let pos in num) {
    console.log(`${num[pos]}`)
}

/*for (let pos=0;pos<num.length;pos++) {
    console.log(`${num[pos]}`)
}*/