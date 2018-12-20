import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import useIntersect from '../src/index'

const containerStyles = {
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%'
}

const imageStyles = {
  flex: 'auto',
  height: '250px',
  minWidth: '150px',
  margin: '4px'
}

export default function Example () {
  const [images, setImages] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const target = useRef(null)

  function mergeImages (result) {
    setImages(images.concat(result.hits))
    setLoading(false)
  }

  async function fetchImages () {
    setLoading(true)
    const url = `https://pixabay.com/api/?key=11050977-fdf36caa8010523e7efcbf7d0&page=${page}&per_page=15`
    const response = await window.fetch(url)
    const result = await response.json()
    mergeImages(result)
  }

  function onEnter () {
    if (!loading) {
      fetchImages()
      setPage(page + 1)
    }
  }

  useIntersect({ onEnter, element: target })

  return (
    <>
      <div style={containerStyles}>
        {images.length !== 0 && images.map(image =>
          <img style={imageStyles} key={image.id} src={image.webformatURL} />
        )}
      </div>
      <span ref={target} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Example />)
