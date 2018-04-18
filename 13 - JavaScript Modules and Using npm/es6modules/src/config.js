/* 
const apiKey = 'abc123';

export default apiKey;

*/

//Multiple named exports
export const apiKey = 'new123';

export const url = 'http://wesbos.com';

export function sayHi(name){
    console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'snickers';

export {age as old, dog};