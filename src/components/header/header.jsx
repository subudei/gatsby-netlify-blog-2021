import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"
import "./header.styles.scss"

function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="header__container">
      <div className="header__logo__home">
        <Link className="header__logo__link" to="/">
          <h1 className="header__logo__title">
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
      <ul className="header__menu">
        <li>
          <Link
            className="header__menu__item"
            activeClassName="active__header__menu__item"
            to="/"
          >
            home
          </Link>
        </li>
        <li>
          <Link
            className="header__menu__item"
            activeClassName="active__header__menu__item"
            to="/blog"
          >
            blog
          </Link>
        </li>
        <li>
          <Link
            className="header__menu__item"
            activeClassName="active__header__menu__item"
            to="/about"
          >
            about
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
