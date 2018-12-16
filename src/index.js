import { useEffect } from 'react'

export default function useIntersect (callback, element, options = {}) {
  if (typeof callback !== 'function') {
    throw new TypeError(`Expected callback to be function, but got ${typeof callback}`)
  }

  if (typeof options !== 'object') {
    throw new TypeError(`Expected options to be object, but got ${typeof callback}`)
  }

  useEffect(() => {
    const observer = new window.IntersectionObserver(callback, options)
    observer.observe(element.current)
    return () => observer.unobserve(element.current)
  })
}
