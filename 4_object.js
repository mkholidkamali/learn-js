
{
    // Freeze & Seal
    // const person = {
    //     first: 'Kholid',
    //     last: 'Kamali'
    // }
    // Object.freeze(person);
    // Object.seal(person);
    // person.first = 'Imelda';
    // delete person.last;
    // console.log(person);
}

{
    // Assign
    // const target = {first: 'Kholid'};
    // const source = {last: 'Kamali', first: 'Imelda'};
    // Object.assign(target, source);
    // console.log(target)
}

{
    // Property Name & Value
    const person = {
        first: 'Kholid',
        last: 'Kamali'
    }
    console.log(Object.values(person));
    console.log(Object.getOwnPropertyNames(person));
}