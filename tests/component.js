import React, { useRef } from 'react'
import useIntersect from '../src'

export default function Example ({ onEnter, onExit }) {
  const element = useRef(null)

  useIntersect({ onEnter, onExit, element })

  return (
    <div>
      <h1
        ref={element}
        style={{ marginTop: '110vh', textAlign: 'center', fontSize: '4em' }}
      >
        Hello, Intersect!
      </h1>
    </div>
  )
}
