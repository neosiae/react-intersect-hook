# react-on-intersect 

[![npm version](https://img.shields.io/npm/v/react-on-intersect.svg)](https://www.npmjs.com/package/react-on-intersect) [![Build Status](https://travis-ci.com/neosiae/react-on-intersect.svg?branch=master)](https://travis-ci.com/neosiae/react-on-intersect) [![dependency status](https://depsjs.xyz/status/github/neosiae/react-intersect-hook/status.svg)](https://depsjs.xyz/github/neosiae/react-intersect-hook) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

> ## Deprecated in favor of [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer)

## Demo
[Infinite Scroll](https://neosiae.github.io/react-on-intersect/)

## Installation
`npm install react-on-intersect`

## Usage

```javascript
import React, { useRef } from 'react'
import useIntersect from 'react-on-intersect'

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

#### onEnter([entry])
A function which is called when elements start intersecting. 

#### onExit([entry])
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
