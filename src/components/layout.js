import React from "react"

import Header from "./header"
import Footer from "./footer"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/index.scss"
import * as layoutStyles from "./layout.module.scss"

const Layout = ({
  children,
  footerGallery = false,
  servicesHeader = false,
}) => {
  return (
    <div className={layoutStyles.container}>
      <Header servicesSection={servicesHeader} />
      <div className={layoutStyles.content}>{children}</div>
      <Footer galleryPresent={footerGallery} />
    </div>
  )
}

export default Layout
