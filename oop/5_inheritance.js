
{
    function Employee(first) {
        this.first = first
        this.say   = (name) => {
            console.log(`Hello ${name} my name is ${first}`)
        }
    }

    function Manager(first, last) {
        this.last = last
        Employee.call(this, first);
    }

    const kk = new Manager('kholid', 'kamali');
    console.log(kk);
    console.log(kk.say('Imelda'));
}