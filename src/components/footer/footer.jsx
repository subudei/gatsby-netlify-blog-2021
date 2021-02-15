import React from "react"
import "./footer.styles.scss"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
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
      <div>
        <h1 className="footer__info__h1">
          Created by {data.site.siteMetadata.author.name} © 2021
        </h1>
        <div className="footer__links">
          <a
            href="https://github.com/subudei"
            target="blank"
            className="footer__link"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-cirkovic-3711331b3/"
            target="blank"
            className="footer__link"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
