
const original = "Kholid Kamali==="

const encoded = btoa(original);
console.log(encoded);

const decode = atob(encoded);
console.log(decode);