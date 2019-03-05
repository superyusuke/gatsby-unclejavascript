import React from 'react'

class Peace extends React.Component {
  componentDidMount() {
    while (true) {
      alert(`
    “War is peace.
    Freedom is slavery.
    Ignorance is strength.” `)
    }
  }
  render() {
    return <div />
  }
}

export default Peace
