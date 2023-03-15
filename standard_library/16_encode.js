

// const url = 'https://youtube.com/kholidkamali/?name=Kholid Kamali'
// const encoded = encodeURI(url);
// console.log(encoded);
// const decode = decodeURI(url);
// console.log(decode);

const value = "Kholid&Kamali=Mohamad"
const url = 'https://youtube.com/kholidkamali/?name='

const encoded = encodeURIComponent(value);
console.log(url + value);

const decode = decodeURIComponent(encoded);
console.log(encoded);