// eslint-disable-next-line
import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Link } from 'gatsby'
import styles from './header.module.scss'
import classNames from 'classnames'

const headerStyles = css`
   {
    @media print {
      display: none;
    }
  }
`

const Header = ({ location }) => {
  return (
    <div
      css={headerStyles}
      style={{
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '40px 0 20px',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{ color: '#FFD399', width: '100%', marginBottom: '20px' }}
          >
            <div className="foo">
              <span className="letter" data-letter="U">
                U
              </span>
              <span className="letter" data-letter="n">
                n
              </span>
              <span className="letter" data-letter="c">
                c
              </span>
              <span className="letter" data-letter="l">
                l
              </span>
              <span className="letter" data-letter="e">
                e
              </span>
              <span className="letter" data-letter=" ">
                &nbsp;
              </span>
              <span className="letter" data-letter="J">
                J
              </span>
              <span className="letter" data-letter="a">
                a
              </span>
              <span className="letter" data-letter="v">
                v
              </span>
              <span className="letter" data-letter="a">
                a
              </span>
              <span className="letter" data-letter="S">
                S
              </span>
              <span className="letter" data-letter="c">
                c
              </span>
              <span className="letter" data-letter="r">
                r
              </span>
              <span className="letter" data-letter="i">
                i
              </span>
              <span className="letter" data-letter="p">
                p
              </span>
              <span className="letter" data-letter="t">
                t
              </span>
              <span className="letter" data-letter=".">
                .
              </span>
              <span className="letter" data-letter="c">
                c
              </span>
              <span className="letter" data-letter="o">
                o
              </span>
              <span className="letter" data-letter="m">
                m
              </span>
            </div>
          </Link>
        </h1>
        <ul className={styles.wrapper}>
          <li className={styles.item}>
            <Link
              className={classNames(styles.link, {
                [styles.located]: location === '/article/',
              })}
              to="/article/"
            >
              Article
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={classNames(styles.link, {
                [styles.located]: location === '/category/',
              })}
              to="/category/"
            >
              Category
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              className={classNames(styles.link, {
                [styles.located]: location === '/about/',
              })}
              to="/about/"
            >
              About me
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
