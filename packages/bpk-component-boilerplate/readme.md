# bpk-component-boilerplate

> Backpack example component.

## Installation

```sh
npm install bpk-component-boilerplate --save-dev
```

## Usage

```js
import React from 'react';
import BpkBoilerplate from 'bpk-component-code';

export default () => (
  <div>
    <BpkBoilerPlate title="Hello world" />
    <BpkBoilerPlate title="Hello world" alternate />
  </div>
);
```

## Props

| Property  | PropType | Required | Default Value |
| --------- | -------- | -------- | ------------- |
| title     | Node     | true     | -             |
| alternate | bool     | false    | false         |
| className | string   | false    | null          |
