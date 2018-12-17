# react-intersect-hook 

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)](https://github.com/emersion/stability-badges#unstable) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Do something when two elements intersect. 

> Hooks are an upcoming feature that lets you use state and other React features without writing a class. They’re currently in React v16.7.0-alpha.

## Installation
`npm install react-intersect-hook`

## Usage

```javascript
import React, { useRef } from 'react'
import useIntersect from 'react-intersect-hook'

export default function Example () {
  const element = useRef(null)

  function onEnter () {
    console.log('Hi!')
  }

  function onExit () {
    console.log('Bye!')
  }

  useIntersect({ onEnter, onExit, element })

  return (
    <>
      <h1
        ref={element}
        style={{ marginTop: '110vh', textAlign: 'center', fontSize: '4em' }}
      >
        Hello, Intersect!
      </h1>
    </>
  )
}
```

## API

### useIntersect({ onEnter, [onExit], element, [options] })

#### onEnter
A function which is called when elements start intersecting. 

#### onExit
A function which is called when elements stop intersecting.

#### element
Target element to watch.

#### options
See [Intersection Observer#Parameters](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) for available options.

## Prior art
[on-intersect](https://github.com/yoshuawuyts/on-intersect)

## Read more 
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## License
[MIT](https://opensource.org/licenses/MIT)
