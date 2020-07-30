import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
        tags
      }
      html
    }
  }
`

const Post = props => {
  const tags = props.data.markdownRemark.frontmatter.tags.split(", ")
  console.log(tags)
  return (
    <Layout>
      <Link
        to="/"
        style={{
          color: "#2c3e50",
          textDecoration: "none",
          backgroundColor: "#f9f9f9",
          padding: "8px 15px",
          margin: "10px 0",
          display: "inline-block",
          borderRadius: "2px",
        }}
      >
        Go Back
      </Link>
      <hr />
      <div className="tags">
        <ul>
          {tags.map(el => (
            <li>{el}</li>
          ))}
        </ul>
      </div>
      <h1 style={{ color: "#2c3e50", fontSize: "50px" }}>
        {props.data.markdownRemark.frontmatter.title}
      </h1>

      <div
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </Layout>
  )
}

export default Post
