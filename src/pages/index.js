import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="posts">
        <ul>
          {data.allMarkdownRemark.edges.map(edge => {
            return (
              <Link to={`/${edge.node.fields.slug}`}>
                <li key={edge.node.frontmatter.date}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <span>{edge.node.frontmatter.date}</span>
                </li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default IndexPage
