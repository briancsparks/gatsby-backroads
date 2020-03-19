import React      from 'react'
import {Link}     from 'gatsby'
import Layout     from '../components/Layout'
import {graphql}  from 'gatsby'

const blog = ({data}) => {
  console.log({data})
  return (
    <Layout>
      Hello from blog page<Link to="/">back home</Link>
      <h1>title: {data.site.siteMetadata.title}</h1>
    </Layout>
  )
}
export const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          data {
            name
            age
          }
        }
      }
    }
  `;

export default blog;
