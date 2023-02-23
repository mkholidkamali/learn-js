
{
    // Set
    const set = new Set();

    set.add('Kholid');
    set.add('Kholid');
    set.add('Kamali');
    set.add('Kamali');

    console.log(set);
    console.log(set.size);
    console.log(set.values());
    console.log(set.has('Kamali'));

    set.forEach(value => {
        console.log(value);
    });
}