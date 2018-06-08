# String Methods

There are string methods we can utilize in JS.

```
const course = 'RFB2';
const flightNumber = '20-AC2018-jz';
const accountNumber = '825242631RT0001';

const make = 'BMW';
const model = 'x5';
const colour = 'Royal Blue';

```

ABove we have some string variables that we are going to use with the following functions:

```.startsWith()```, ```.endsWith()```,``` .includes()```, ```.repeat()```

Let us dive in with ```.startsWith()```:

```
course.startswith('RFB') // DOES NOT WORK FOR LOWERCASES -USE REGEX

flightNumber.startsWith('AC') //fALSE

flightNumber.startsWith('AC',3) // True - start after 3 characters 

```

```.endsWith()```:
```
lightNumber.endsWith('jz') //True
accountNumber.endsWith('RT',11) //oNLY TAKE FIRST 11 NUMBERS

```

``` .includes()```:
```
flightNumber.includes('AC') //True```


```.repeat()```
```
course.repeat(10) //will repeat that variable 10 times


function leftPad(str, length =20){
  return `-> ${' '.repeat(length - str.length)}${str}`;
}


```

The left pad function will left align the string value.
