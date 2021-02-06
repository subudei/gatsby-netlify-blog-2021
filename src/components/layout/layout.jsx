import React from "react"
import "./layout.styles.scss"

import Header from "../header/header"
import Footer from "../footer/footer"

const Layout = ({ children }) => {
  return (
    <div className="layout__container">
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

export default Layout
