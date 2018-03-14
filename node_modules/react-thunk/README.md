# react-thunk

> Define React functional stateless components as thunks

## Install

```sh
npm i --save react-thunk
```

## Why?

__Instead of doing the following, and setting a new change listener on each render:__

```js
function NameField(props) {
    const { name, setName } = props;

    return <input type="text" value={ name } onChange={ (evt) => setName(evt.target.value) } />;
}
```

__Do the following, and only define your change listener once:__

```js
function NameField(initialProps) {
    const { setName } = initialProps;
    const changeHandler = (evt) => setName(evt.target.value);

    return (props) => {
        const { name } = props;

        return <input type="text" value={ name } onChange={ changeHandler } />;
    };
}
```

## How?

It creates a class for you: https://github.com/troch/react-thunk/blob/master/modules/index.js. That is all the source code.


## API

__thunk(component: Function[, pure: Boolean])__

Since a `thunk` creates a class, it gives you the opportunity to have pure components (set second argument to true).

```js
import React from 'react';
import thunk from 'react-thunk';

function NameField() {
    /* ... */
}

export default thunk(NameField);
```
