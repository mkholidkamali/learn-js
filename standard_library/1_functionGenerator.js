
function* createNames() {
    yield 'Kholid';
    yield 'Kamali';
}
const names = createNames();
// for (const name of names) {
//     console.log(name);
// }


function* buatGanjil(value) {
    for (let i = 1; i <= value; i++) {
        if(i % 2 === 1) {
            console.log(`Yield ${i}`);
            yield i;
        }
    }
}
function buatGanjilArray(value) {
    const result = [];
    for (let i = 1; i <= value; i++) {
        if(i % 2 === 1) {
            console.log(`Yield ${i}`);
            result.push(i);
        }
    }
    return result;
}

const numbers = buatGanjil(100);
// for(const number of numbers) {
//     console.log(number);
// }
// console.log(numbers.next().value);


function* fibonacci() {
    let prev = 0;
    let next = 1;

    yield prev;
    yield next;

    while(true) {
        const newVal = prev + next;

        yield newVal;

        prev = next;
        next = newVal;
    }
}

const generate = fibonacci();
for (let i = 0; i < 100; i++) {
    console.log(generate.next().value);
}