# Vanilla Retro JS

Demo: https://martine-dowden.github.io/vanilla-retro-js/

NPM: https://www.npmjs.com/package/vanilla-retro-js

## Blink

`import { Blink } from 'vanilla-retro-js/src/blink.js';`

```HTML
  <retro-blink>
    <div slot="content">
      <p>Blink</p>
    </div>
  </retro-blink>
```

## Marquee</h2>

`import { Marquee } from 'vanilla-retro-js/src/marquee.js';`

```HTML
  <retro-marquee direction="bottom">
    <span slot="content">Marquee Tag</span>
  </retro-marquee>
```

### Properties

- height: number
- width: number
- direction: top | bottom | left | right (default: right)

## Running the Project

```bash
$ npm start
> navigate to http://localhost:8080/
```

## Using Components in an Angular or Vue Project

Per component

in Module or main.js:

```JavaScript
  import 'vanilla-retro-js/src/{ componentName.js }';
```

example

```JavaScript
  import 'vanilla-retro-js/src/blink.js';
```

Import whole library

```JavaScript
  import 'vanilla-retro-js/src/vanilla-retro.js';
```


