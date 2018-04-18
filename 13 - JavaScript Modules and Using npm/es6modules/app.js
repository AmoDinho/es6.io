import {uniq} from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';
//Importing named exports
import {apiKey, url, sayHi, old, dog} from './src/config';
console.log(apiKey, old,dog);

const ages = [1,1,4,52,12,4];
 sayHi('Brooke');
console.log(uniq(ages));

import User, {createURL,gravatar} from './src/user';


const user = new User('Amo Prince', 'amdinho@gmail.com', 'Amodinho.com');
const profile = createURL(user.name);
console.log(profile);

const image = gravatar(user.email);
console.log(image);