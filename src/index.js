import { useEffect } from 'react'

const NOOP = function () {}

export default function useIntersect ({ onEnter, onExit, element, options }) {
  if (!onEnter && !onExit) {
    throw new Error('useIntersect must be called at least with one callback')
  }

  onEnter = onEnter || NOOP
  onExit = onExit || NOOP
  options = {}

  if (typeof onEnter !== 'function') {
    throw new TypeError(`Expected onEnter to be function, but got ${typeof onEnter}`)
  }

  if (typeof onExit !== 'function') {
    throw new TypeError(`Expected onExit to be function, but got ${typeof onExit}`)
  }

  if (typeof options !== 'object') {
    throw new TypeError(`Expected options to be object, but got ${typeof object}`)
  }

  function handler (entries) {
    const entry = entries[0]
    if (entry.isIntersecting) {
      onEnter()
    } else {
      onExit()
    }
  }

  const observer = new window.IntersectionObserver(handler, options)

  useEffect(() => {
    observer.observe(element.current)
    return () => observer.unobserve(element.current)
  })
}
