
const person = {
    first: 'Rowan',
    last: 'Atkinson'
}

const object = {
    first: 'Tes',
    last: 'Tes',
    get full()  {
        if(this.first == "Kipas") {
            return `Yes`;
        } else {
            return `No`;
        }
    },
    set full(data) {
        const array = data.split(' ');
        this.first = array[0];
        this.last  = array[1];
    }
}
object.full = "Kipas Angin";
console.log(object.full);