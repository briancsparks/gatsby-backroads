import React        from "react"
import {Link}       from 'gatsby'
import Layout       from '../components/Layout'

export default () => (
    <Layout>
      <div>
        Hello from BackRoads!
      </div>
      <Link to="/blog/">
        blog page
      </Link>
    </Layout>
)
