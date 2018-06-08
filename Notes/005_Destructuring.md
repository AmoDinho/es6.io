# Destucturing

Destructuring enables the extraction of data in an object/array to be stored in a variable.

Simple Example:

```
 const player = {
    first: 'Kylian',
    last: 'Mbappe',
    country: 'France',
    club: 'PSG',
    Position: 'Striker'
  };

const first = player.first;


```

This would be the regular way of doing it and it is no way to live your life.

```
  //Destructing syntax
  const { first, last} = player; 

```

We are creating the variables first and last from the values in the player object. 

We can take it a step further with nested data:

```
const team = {
    first: 'Arsenal',
    last: 'FC',
    links: {
      social: {
        twitter: 'https://twitter.com/arsenalfc',
        facebook: 'https://facebook.com/arsenalfc',
      },
      web: {
        site: 'https://arsenalfc.com'
      }
    }
  };

```

Usually you would do this : ``` const twitter = team.links.social.twitter```. 

The destructured way: ```const {twitter,facebook} = team.links.social; ```


Now what if we need to make the name of the variable we are creating different from the one that is in our data?

```
const {twitter: tweet, facebook:fb} = team.links.social;
```

  We are also able to Set Defaults: 
  ```
  const settings = {width: 300, color: 'black'} // height & font size


  const {width = 100, height=100, color ='blue', fontSize =25} = settings; 

  ```
  Object Destructuring with variable renaming & default values is also possible:

  ```
  const {w:width =400, h:height =500} = {w:800}
  ```

  ## Destructuring with Arrays

Lets assess the regular way:

```
    const details = ['Captian Awesome', 2345, 'awesome.com'];

    const name = details[0];
```

With destructuring we can simply do this :
```const [name,id,website] = details;```

If the data is wrapped in a string it won't be an issue:

```
const data = 'Basketball,Sports,90210,23';

const [itemName, category, sku, inventory] = data.split(',');
```

What if you need two propierties out of the object and need to group the rest into one?

```

//If you want to find out the properties of two items in the array and the rest

const team = ['Messi','Iniesta', 'Suarez','Neymar','Dembele']

//Use the spread operator
const [captian, assistant, ...players] = team;
```

## Destructing in functions

### Example 1

Without desctructuring:

```

  function convertCurrency(amount) {
    const converted = {
      USD: amount * 0.76,
      GPB: amount * 0.53,
      AUD: amount * 1.01,
      MEX: amount * 13.30
    };
    return converted;
  }

  cosnt hundo = convertCurrency(100);
  Console.log(hundo);
  console.log(hundo.AUD);
   console.log(hundo.MEX);


```
now with destructuring:

```
//Destructre multiple objects from a function

const {USD,GPB,AUD,MEX} = convertCurrency(100);
console.log(USD,GPB,AUD,MEX);
```

### Example 2

```
//You can destructure in the function
function tipCalc({total, tip = 0.15, tax = 0.13}){
  return total + (tip *total) + (tax * total);
}

const bill = tipCalc({total:200,tip:0.20, tax:0.13});
console.log(bill);

```

Here we simply wrap the variables in {} where they are initilized in the function. Then the syntax is pretty similar to other destructuring instances. 

## Example 3

What if we wanted to swap values of two variables between them?

```
let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

/* Old way
var temp =inRing;
inRing = onSide;
onside = tmp;
*/

//Destructured
[inRing,onSide] = [onSide, inRing];

```

