# New Variables

In a nutshell there are three variable types we use often in JS. Const, Let and Var and here is how you should use them:

- [] Const cannot be updated and is not immutable. Is also scoped to a block statement  '{}'.
- [] ```let``` is when you want to update the value of a variable. Is also scoped to a block statement  '{}'.
- [ ] ```var``` can be reassigned and updated in the function scope.


Examples 

Wrong Usage 
```
const id = 'rtr120';

id = 'etu098'; //Uncaught TypeError: Assignment to constant variable.

```
Instead use let:

```

let id = 'oip987';

id = '098oui';

```

#### Example 2 

```
let car = 'Tesla';

function(){
    if (speed >100){
        let car = 'horse';
    }
}
```

//expected output: Tesla

Why? Because let is function scoped. You would need to change it to ```var```

However if we want to update a const object we can like so, however we cannot remove it's variables:

```

const car = {
    name:'Opel',
    type: 'Sedan'
}

car.type = 'Hatchback';

```