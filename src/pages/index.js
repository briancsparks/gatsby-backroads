import React    from "react"
import {Link}   from 'gatsby'
import Layout   from '../components/Layout'

export default () => (
    <Layout>
      Hello from BackRoads!
      <Link to="/blog/">
        blog page
      </Link>
    </Layout>
)
