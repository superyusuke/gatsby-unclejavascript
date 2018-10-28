import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          JavaScript おじさん.com
        </Link>
      </h1>
      <ul className={styles.wrapper}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            Top
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/about/">
            About me
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/page-3/">
            Go to page 3
          </Link>
        </li>
        <li className={styles.item}>
          <Link className={styles.link} to="/graphql-test/">
            graphql-test.js
          </Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
