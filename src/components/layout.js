import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from './header'
import './layout.scss'
import './codeHighlight.scss'

const Layout = ({ children, title, description, headerTitle }) => (
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
    <Header siteTitle={headerTitle} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
