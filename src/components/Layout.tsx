import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Location } from '@reach/router'

import { Header } from './Header'
import './layout.scss'
import './codeHighlight.scss'

type Props = {
  title: string
  description: string
  headerTitle: string
}

export const Layout: React.FC<Props> = (props) => {
  const { title, description, children, headerTitle } = props

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
