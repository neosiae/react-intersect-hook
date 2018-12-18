/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, wait } from 'react-testing-library'
import IntersectionObserver from './IntersectionObserver'
import Example from './component'

const mockObserve = jest.fn()
const mockUnobserve = jest.fn()
jest.mock('./IntersectionObserver', () => {
  return jest.fn().mockImplementation((callback) => {
    return {
      observe: mockObserve,
      unobserve: mockUnobserve
    }
  })
})

beforeEach(() => {
  IntersectionObserver.mockClear()
  mockObserve.mockClear()
  mockUnobserve.mockClear()
})

afterEach(cleanup)

window.IntersectionObserver = IntersectionObserver

describe('Instance', () => {
  it('Creates a new instance of IntersectionObserver', () => {
    const onEnter = jest.fn()
    render(<Example onEnter={onEnter} />)
    expect(window.IntersectionObserver).toHaveBeenCalled()
  })

  it('Starts observing a target element when mounted', async () => {
    const onEnter = jest.fn()
    render(<Example onEnter={onEnter} />)
    await wait(() => {
      expect(mockObserve).toHaveBeenCalled()
    })
  })

  it('Stops observing a target element when unmounted', () => {
    const onEnter = jest.fn()
    const { unmount } = render(<Example onEnter={onEnter} />)
    unmount()
    expect(mockUnobserve).toHaveBeenCalled()
  })
})

describe('onEnter', () => {
  beforeAll(() => {
    IntersectionObserver.mockImplementation((cb) => {
      const entry = [{ isIntersecting: true }]
      cb(entry)
      return {
        observe: jest.fn(),
        unobserve: jest.fn()
      }
    })
  })

  it('is called when elements start intersecting', () => {
    const onEnter = jest.fn()
    render(<Example onEnter={onEnter} />)
    expect(onEnter).toHaveBeenCalled()
  })
})

describe('onExit', () => {
  beforeAll(() => {
    IntersectionObserver.mockImplementation((cb) => {
      const entry = [{ isIntersecting: false }]
      cb(entry)
      return {
        observe: jest.fn(),
        unobserve: jest.fn()
      }
    })
  })

  it('is called when elements stop intersecting', () => {
    const onExit = jest.fn()
    render(<Example onExit={onExit} />)
    expect(onExit).toHaveBeenCalled()
  })
})
