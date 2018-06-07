# Template Strings

Usually you would need to concatinate serval variables to display strings. ES6 offers us an easier way to tackle this problem.

Basic Usage:

```

const coin = 'StarCoin';
  const price = 12.09;

//Regualr way
const sentence = `My coin` + coin  +` is worth $ `+ price*3 + ` .`;
console.log(sentence)

//Template Literals
  const sentence2 = `My coin ${coin} is worth $ ${price * 3} .`;
  console.log(sentence2);


```

This how Temp strings can be use in render functions:

```
const beer = {
    name: 'Castle Lager',
    brewery: 'Newlands Brewery',
    keywords: ['bitter', 'sweet', 'malted', 'fine']
  };

  function renderKeywords(keywords) {
    return `
      <ul>
        ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
      </ul>
    `;
  }

  const markup = `
    <div class="beer">
      <h2>${beer.name}</h2>
      <p class="brewery">${beer.brewery}</p>
      ${renderKeywords(beer.keywords)}
    </div>
  `;
  document.body.innerHTML = markup;

```

As well as for looping:

```

const apostles = [
    { name: 'John', age: 72 },
    { name: 'Simon', age: 98 },
    { name: 'Peter', age: 91 }
  ];


  const markup = `
    <ul class="apostles">
      ${apostles.map(apostles => `
        <li>
          ${apostles.name}
          is
          ${apostles.age * 7}
        </li>`).join('')}
    </ul>
  `;
  document.body.innerHTML = markup;

```
Template Strings can also have if statements applied to them :

```
const song = {
    name: 'X',
    artist: 'Kendrick Lamar',
    featuring: '2Chainz, SchoolboyQ & Saudi'
  };

  const markup = `
    <div class="song">
      <p>
        ${song.name} — ${song.artist}
        ${song.featuring ? `(Featuring ${song.featuring})` : ''}
      </p>
    </div>
  `;

  document.body.innerHTML = markup;

  ```

  If you remove any values from the featuring variable it will just display the artist.

  Run this example [Add link to tagged-templates.html]

  Basically we can write functions that allow us to easily modify strings ...the DOM MAYBE? not too sure..

