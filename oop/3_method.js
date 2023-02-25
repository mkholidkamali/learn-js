
{
    function Person(){
        this.first = ''
        this.last = ''
        this.say = () => {
            console.log(`My name is ${this.first}`)
        }
    }

    const kholid = new Person();
    kholid.first = 'Kholid'
    kholid.say()
}