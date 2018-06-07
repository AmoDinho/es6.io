# Arrow Functions

Arrow functions are suited for callback methods like map,reduce or forEach.
They are not suited for object methods. Classic functions are bound to the context 
in which the function is called.

While arrow functions use the value of this in their scope.

Context - the object that calls the function
Scope - variables that are visiable to a function where it is defined.

Examples:

```
const shoes = ['Adidas', 'New Balance' , 'Nike'];

//Original function method
  const type = shoes.map(function(shoes){
    return `${shoes} boost`;
  });


//Inclusion of arrow function
const  type2 = shoes.map(shoes => `${shoes} boost`0;

console.log(type);

console.log(type2);

```

Arrow functions can be passed empty arguments. 

```const type5 = shoes.map(() => `cool boost`);```

More Examples of Arrow Functions:

```
const race = '100m Dash';
const winners = ['Victor Ochke', 'Theane Sitnhuis', 'Solly March'];
const win = winners.map((winner,i) => ({name:winner,race,place: i+1}));

const ages = [23,62,45,342,3,54,53,54,23];
const old = ages.filter(age => age >= 60);
console.log(old);

```

There are times when arrow functions are not needed. 

In a situation when  ```this``` is needed:
```

 const button = document.querySelector('#pushy');
 button.addEventListener('click',function(){
   console.log(this);
   this.classList.toggle('on');
 });

 ```

 When a method needs to bind an object:
```
//When a method needs to bind an object
const stock = {
  points: 23,
  score(){
    console.log(this);
    this.points++;
  }
}
//in the console run stock.score();
```

when you need to add a prototype method
```
class Whip {
  constructor(make,colour){
    this.make = make;
    this.colour = colour
  }
}
const sla = new Whip('tesla','yellow');
const merc = new Whip('Mercedes','white');
Whip.prototype.summarize = function(){
  return `This car is a ${this.make} in the colour ${this.colour}`;
};
//run make.summerize() in console

```

When you need an arguments object
```
const orderChildern = function(){
  const children = Array.from(arguments);
  return children.map((child,i) => {
    return `${child} was child #${i +1}`;
  })
  console.log(arguments);
}

```

Practice Time: 

Image you are trying to get the total video lenght for a specific type of 
video (In this example it is flexbox)


```
// Select all the list items on the page and convert to array
  const items = Array.from(document.querySelectorAll('[data-time]'));
  // Filter for only the elements that contain the word 'Flexbox'
  const filtered = items
    .filter(item => item.textContent.includes('Flexbox'))
    // map down to a list of time strings
    .map(item => item.dataset.time)
    // map to an array of seconds
    .map(timecode => {
      const parts = timecode.split(':').map(part => parseFloat(part));
      return (parts[0] * 60) + parts[1];
    })
    // reduce to get total
    .reduce((runningTotal, seconds) => runningTotal + seconds);
  console.log(filtered);

  ```


  Or you need make an array of the largest numbers:

  ```
  const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
  const largeNumbers = numbers.filter(number => number > 70);
  console.log(largeNumbers);

  ```