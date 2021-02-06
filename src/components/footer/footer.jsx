import React from "react"
import "./footer.styles.scss"

import { graphql, useStaticQuery } from "gatsby"

function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
          }
        }
      }
    }
  `)
  return (
    <div className="footer__container">
      <h1 className="footer__info__h1">
        Created by {data.site.siteMetadata.author.name} © 2021
      </h1>
    </div>
  )
}

export default Footer
