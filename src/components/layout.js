/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <div className="container">{children}</div>
      <footer style={{ textAlign: "center" }}>
        <div className="container">
          Made with ❤ By{" "}
          <a
            href="https://twitter.com/ezzdin_atef"
            target="_blank"
            style={{ color: "#2c3e50", textDecoration: "none" }}
          >
            {data.site.siteMetadata.author}
          </a>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
