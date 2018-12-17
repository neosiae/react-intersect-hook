import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useIntersect from '../src/index'

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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Example />)
