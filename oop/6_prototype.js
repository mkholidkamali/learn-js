
{
    function Person(first, last) {
        this.first = first
        this.last = last
        this.say = () => {
            console.log(`My name is ${this.first}`)
        }
    }

    Person.prototype.sayBye = () => {
        console.log('BYE');
    }
    Person.prototype.run = () => {
        console.log(this.first);
        console.log(`${this.first} is running`);
    }
    
    const kholid = new Person('Kholid');
    console.log(kholid.constructor);

    kholid.say();
    kholid.run();
    kholid.sayBye();
}


// Remove string in javascript