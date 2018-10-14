import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>About Me</h1>
    <p>JavaScript おじさんとして都内で精力的に活動中。JavaScript にもいいところはたくさんある！</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
