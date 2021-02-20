import { Link, graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import "./header.styles.scss"
import { FaBars } from "@react-icons/all-files/fa/FaBars"
import { FaTimes } from "@react-icons/all-files/fa/FaTimes"

function Header() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(clicked => !clicked)
  const closeMobileMenu = () => setClick(false)
  // const handleKeyPress = e => {
  //   if (e.keyCode === 13) {
  //     setClick(clicked => !clicked)
  //   }
  // }
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
          <h1 className="header__logo__title" onClick={closeMobileMenu}>
            {data.site.siteMetadata.title}
          </h1>
        </Link>
      </div>
      <div role="presentation" onClick={handleClick} className="header__bars">
        {click ? (
          <FaTimes className="header__menu__btn" />
        ) : (
          <FaBars className="header__menu__btn" />
        )}
      </div>
      <ul
        className={click ? "header__menu mobile" : "header__menu"}
        onClick={closeMobileMenu}
      >
        <li className="header__link">
          <Link
            className="header__menu__item"
            activeClassName="active__header__menu__item"
            to="/"
          >
            home
          </Link>
        </li>
        <li className="header__link">
          <Link
            className="header__menu__item"
            activeClassName="active__header__menu__item"
            to="/blog"
          >
            blog
          </Link>
        </li>
        <li className="header__link">
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
