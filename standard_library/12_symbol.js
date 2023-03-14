
// const first = Symbol('imelda');
// const last  = Symbol('damayanti');

const person  = {};
person[Symbol.for('first')] = 'Kholid';
person[Symbol.for('last')]  = 'Kamali';

console.log(Symbol.for('first') == Symbol.for('first'));