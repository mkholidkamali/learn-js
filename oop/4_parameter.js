
{
    function Person(firstname, lastname){
        this.first = firstname
        this.last = lastname
        this.say = () => {
            console.log(`My name is ${this.first}`)
        }
    }

    const kholid = new Person('Kholid', 'Kamali');
    kholid.say()
}