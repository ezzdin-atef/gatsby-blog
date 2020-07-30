import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "font-awesome/css/font-awesome.css"

const Header = ({ siteTitle }) => {
  // const query = graphql`
  //   query {
  //     fileName: file(relativePath: { eq: "images/myimage.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 400, maxHeight: 250) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `
  return (
    <header>
      <div className="container">
        <div className="info">
          <img src="https://ezzdinatef.me/img/personal.jpeg" alt="" />
          <div className="text">
            <Link to="/">{siteTitle}</Link>
            <p>A Web Developer</p>
          </div>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://twitter.com/ezzdin_atef" target="_blank">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCcV8kzgd-DhVXCUYDb8fGYw"
                target="_blank"
              >
                <i className="fa fa-youtube-play" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="https://codepen.io/ezzdin_atef" target="_blank">
                <i className="fa fa-codepen" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
