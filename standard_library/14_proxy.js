
// Create 
const target = {
    middleName: 'mohamad'
}

const handler = {
    get: (target, property) => {
        console.log(`Accesss Property ${property}`)
        return target[property];
    },
    set: (target, property, value) => {
        console.log(`Change Property ${property} : ${value}`)
        target[property] = value; 
    }
}

const proxy = new Proxy(target, handler);
proxy.firstName = 'kholid'
proxy.lastName  = 'kamali'

console.log(proxy.firstName)
console.log(proxy.lastName)
console.log(target)