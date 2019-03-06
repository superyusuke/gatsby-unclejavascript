import React from 'react'
import { Random } from 'random-js'

const random = new Random() // uses the nativeMath engine

class Peace extends React.Component {
  componentDidMount() {
    const randomValue = random.integer(1, 100)

    if (randomValue < 10) {
      while (true) {
        alert(`
    “War is peace.
    Freedom is slavery.
    Ignorance is strength.” `)
      }
    }
  }
  render() {
    return <div />
  }
}

export default Peace
