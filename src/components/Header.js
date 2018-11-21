import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.scss'
import classNames from 'classnames'

const Header = ({ location }) => {
  return (
    <div
      style={{
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
          <Link to="/" style={{ color: '#FFD399' }}>
            JavaScript おじさん .com
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
