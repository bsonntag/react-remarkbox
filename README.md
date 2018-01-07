# react-remarkbox

A React component for [Remarkbox](https://www.remarkbox.com/).

## Installation

Using npm:

```sh
$ npm install --save react-remarkbox
```

Using yarn:

```sh
$ yarn add react-remarkbox
```

## Usage

```js
import { render } from 'react-dom';
import React from 'react';
import Remarkbox from 'react-remarkbox';

const App = () => (
  <div>
    <h1>My App</h1>

    <Remarkbox
      remarkboxKey={'your-remarkbox-key-goes-here'}
      threadUri={'http://your-domain.test/some-page'}
    />
  </div>
);

render(<App />, document.getElementById('root'));
```

## Props

The `Remarkbox` component has the following required props:

### `className` (string)

Sets the iframe's class.

### `remarkboxKey` (required string)

The Remarkbox key. Get this from your Remarkbox profile.

### `style` (object)

A style object to pass to the iframe.

### `threadFragment` (string)

A comment ID. This is optional and you should get it from `location.hash`.

### `threadUri` (required string)

The URL of the thread's page.

## Contributing

Please feel free to submit any issues or pull requests.

## License

MIT
