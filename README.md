# react-intersect-hook

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

Do something when two elements intersect. 

## Installation
`npm install react-intersect-hook`

## Usage

```javascript
import React, { useRef } from 'react'
import useIntersect from 'react-intersect-hook'

export default function Example () {
  const element = useRef(null)

  useIntersect(() => {
    console.log('Hello, Intersect!')
  }, element)

  return (
    <>
      <h1
        ref={element}
        style={{ marginTop: '110vh' }}
      >
        Hello, Intersect!
      </h1>
    </>
  )
}
```

## API

### useIntersect(callback, element, [options])

#### callback
A function which is called when two elements intersect.

#### element
Target element to watch.

#### options
See [Intersection Observer#Parameters](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) for available options.

## Read more 
[Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

## License
[MIT](https://opensource.org/licenses/MIT)
