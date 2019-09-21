// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

const reactBackground = css`
  background: #61dafb;
`

const vueBackground = css`
  background: #41b883;
`

const style = css`
  text-align: center;
  background: #40a9f3;
  display: inline-block;
  font-size: 10px;
  padding: 5px;
  border-radius: 5px;
  font-weight: bold;
  transition: transform 0.3s;
  &:hover {
    color: #296a8a;
    transform: scale(1.05, 1.05);
  }
  @media (min-width: 600px) {
    font-size: 16px;
    font-weight: normal;
    padding: 10px;
  }
`

const linkStyle = css`
  color: #1c2022;
  &:hover {
    color: #296a8a;
  }
`

const wrapperStyle = css`
  display: flex;
  justify-content: space-around;
  padding-bottom: 10vw;
  @media (min-width: 600px) {
    width: 700px;
    padding-bottom: 30px;
  }
  @media print {
    display: none;
  }
`

const UdemyCMIndex = () => {
  return (
    <div css={wrapperStyle}>
      <div css={[style, reactBackground]}>
        <a
          css={linkStyle}
          href="https://www.udemy.com/react-redux-basic/?couponCode=MEMYME"
        >
          JavaScript おじさんがお届けする、
          <br />
          最高評価の React + Redux レッスンコースで
          <br />
          君も React エンジニアになろう!
        </a>
      </div>
      <div css={[style, vueBackground]}>
        <a
          css={linkStyle}
          href="https://www.udemy.com/vuejs-vuex/?couponCode=MEMYME"
        >
          JavaScript おじさんがお届けする
          <br />
          Vue + Vuex + Vue-router レッスンコースで
          <br />
          君も Vue エンジニアになろう！
        </a>
      </div>
    </div>
  )
}

export default UdemyCMIndex
