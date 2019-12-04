# react-random
[![Build Status](https://travis-ci.org/justynjozwiak/react-random.svg?branch=master)](https://travis-ci.org/justynjozwiak/react-random)
[![CoverageStatus](https://coveralls.io/repos/github/justynjozwiak/react-random/badge.svg?branch=master)](https://coveralls.io/github/justynjozwiak/react-random?branch=master)
[![Github Issues](http://githubbadges.herokuapp.com/justynjozwiak/react-random/issues.svg)](https://github.com/justynjozwiak/react-random/issues)
[![License](http://img.shields.io/:license-MIT-blue.svg)](http://badges.mit-license.org)

React component for rendering random / fake data.

Often times we encounter the situation in our projects when we don't have any backend ready yet and we have to mock some random data in
our templates. That's why I've decided to create a simple React wrapper around [Faker.js](https://github.com/marak/Faker.js/) library called
`react-random` that solves our problem.

## Installation

Execute this line in your app directory:

```
npm install --save react-random
```

Import component into your app:

```javascript
import Random from 'react-random';
```

## Usage

This is the simplest possible usage of the component:

```javascript
import React, { Component } from 'react';
import { render } from 'react-dom';
import Random from 'react-random';

class DemoApp extends Component {
  render () {
    return <Random value='name.firstName' />;
  }
};

render(
  <DemoApp />,
  document.getElementById('app')
);

```

This simple piece of code will fetch `value` prop and divide it into `category = name` and `property = firstName` and according to
[Faker.js](https://github.com/marak/Faker.js/) documentation it will render `faker.name.firstName()` value within `<span>...</span>` tag by default.

You can also specify `tag`, `className` or `locale` of the component:

```javascript
class DemoApp extends Component {
  render () {
    return <Random value='name.lastName' tag='h1' className='cool-component__random-name' locale='ru' />;
  }
};
```

When it comes to random links you can handle them this way:

```javascript
class DemoApp extends Component {
  render () {
    return (
      <Random value='image.cats' tag='a'>
        Click Here!
      </Random>
    );
  }
};
```

and it evaluates to:

```html
  <a href="http://lorempixel.com/640/480/cats">Click Here!</a>
```

At the end you can display also random images:

```javascript
class DemoApp extends Component {
  render () {
    return (
      <Random value='image.animals' tag='img' />
    );
  }
};
```

and it gives you:

```html
  <img src="http://lorempixel.com/640/480/animals" />
```
