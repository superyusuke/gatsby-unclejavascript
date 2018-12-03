import React from 'react'
import classNames from 'classnames'
import 'src/components/switch-english.scss'

class SwitchEnglish extends React.Component {
  constructor(props) {
    super(props)
    this.state = { english: true }
  }

  none = () => {
    const quote = document.querySelectorAll('blockquote')
    quote.forEach(o => (o.style.display = 'none'))
    this.setState({ english: false })
    console.log(this.state.english)
  }

  block = () => {
    const quote = document.querySelectorAll('blockquote')
    quote.forEach(o => (o.style.display = 'block'))
    this.setState({ english: true })
    console.log(this.state.english)
  }

  buttonStyle = bool => {
    return classNames('switch-english__button', {
      'switch-english__button--selected': bool,
    })
  }

  render() {
    const { translatedMode } = this.props
    if (!translatedMode) {
      return null
    }
    return (
      <div className="switch-english">
        <button
          className={this.buttonStyle(this.state.english)}
          onClick={this.block}
        >
          対訳
        </button>
        <button
          className={this.buttonStyle(!this.state.english)}
          onClick={this.none}
        >
          日本語のみ
        </button>
      </div>
    )
  }
}

export default SwitchEnglish
