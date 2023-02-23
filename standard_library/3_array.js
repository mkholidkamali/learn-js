
{
    // Stack
    // const stacks = [];
    // stacks.push('Mohamad');
    // stacks.push('Kholid');
    // stacks.push('Kamali');
    // console.log(stacks.pop());
    // console.log(stacks.pop());
    // console.log(stacks.pop());
    // console.log(stacks.pop());
}

{
    // Array Method
    // const source = [1,2,3,4,5,1,2,3,4,5];
    // console.log(source.find(value => value > 3)); 
    // console.log(source.find((value) => {return value > 3})); 
    // console.log(source.findIndex(value => value > 3)); 
    // console.log(source.includes(7)); 
    // console.log(source.indexOf(5)); 
    // console.log(source.lastIndexOf(5)); 
}

{
    // Filter
    // const numbers = [1,2,3,4,5,6,7,8,9,10];
    // const ganjil = numbers.filter(value => value % 2 == 1);
    // const genap  = numbers.filter(value => value % 2 == 0);
    // console.log(numbers);
    // console.log(ganjil);
    // console.log(genap);
}

{
    // Transform
    const names = ['Mohamad', 'Kholid', 'Kamali'];
    const namesUpper = names.map(value => value.toUpperCase());
    console.log(namesUpper);
    const namesReduce = names.reduce((before, value) => before + " " + value);
    console.log(namesReduce);
    const namesReduceRight = names.reduceRight((before, value) => before + " " + value);
    console.log(namesReduceRight);
    const numbers = [1,2,3,4,5,6,7,8,9,10];
    const total = numbers.reduce((before, value) => before + value)
    console.log(total);
}