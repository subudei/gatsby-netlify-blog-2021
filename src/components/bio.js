import React from "react"
import "./bio.styles.scss"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 400, height: 400, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <>
      <h1 className="bio__title">Santiago (Cuban fisherman)</h1>
      <div className="bio__container">
        {avatar && (
          <Image
            fixed={avatar}
            alt={author?.name || ``}
            className="bio__image"
            imgStyle={{
              borderRadius: `5%`,
            }}
          />
        )}

        <p className="bio__about">
          The Old Man and the Sea, short heroic novel by Ernest Hemingway,
          published in 1952 and awarded the 1953 Pulitzer Prize for fiction. It
          was his last major work of fiction. The story centres on an aging
          fisherman who engages in an epic battle to catch a giant marlin.
        </p>
      </div>
    </>
  )
}

export default Bio
