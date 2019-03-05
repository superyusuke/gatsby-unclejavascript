import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { Location } from '@reach/router'

import Header from './Header'
import './layout.scss'
import './codeHighlight.scss'

import Peace from './Peace'

const Layout = ({ children, title, description, headerTitle }) => {
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          {
            name: 'google-site-verification',
            content: 'vTfUD5wSnsVVdXI3qixqyLK-EXKbKnd-P2dx9rkYv-Y',
          },
        ]}
      >
        <html lang="en" />
      </Helmet>
      <Location>
        {({ location }) => {
          return <Header siteTitle={headerTitle} location={location.pathname} />
        }}
      </Location>
      <Peace />
      <div
        style={{
          margin: '0 auto 100px',
          maxWidth: 960,
          padding: '0 20px',
          paddingTop: 0,
        }}
      >
        {children}
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
