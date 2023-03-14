
// Initial
// const regex1 = 'kholid';
// const regex2 = new RegExp('kholid');
// const regex3 = new RegExp(/kholid/);

// Instance Method
// const name = 'mohamad kholid kamali'
// const regex = /kholid/;

// const result1 = regex.exec(name);
// const result2 = regex.test(name);

// Modifier
// const name = "kholid kamali \nKholid Kamali \nKholid kamali"
// const regex1 = /^kholid/igm;
// const regex2 = /kamali/ig;

// let result 
// while ((result = regex1.exec(name)) !== null) {
//     console.log(result);
// }
// while ((result = regex2.exec(name)) !== null) {
//     console.log(result);
// }

// Advance
// const regex = /ek[aiueo]/ig
// const name = 'eka eki eku eke eko'
// while ((result = regex.exec(name)) !== null) {
//     console.log(result);
// }

// String
const name = 'edo,eko,eki,eku,eke,eka'
console.log(name.match(/ek[aiueo]/ig))
console.log(name.search(/ek[aiueo]/ig))
console.log(name.replace(/ek[aiueo]/ig, 'keren'))
console.log(name.replaceAll(/ek[aiueo]/ig, 'keren'))
console.log(name.split(/,/ig))