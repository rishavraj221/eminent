import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Icon from "../assets/Icons"
import * as footerStyles from "./footer.module.scss"

const Footer = ({ galleryPresent = false }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          phone
          address
          email
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footerContainer}>
      {galleryPresent && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div className={footerStyles.moreWorks}>MORE WORKS</div>
          <div className={footerStyles.gallery}>GALLERY</div>
        </div>
      )}
      <div className={footerStyles.navContainer}>
        <Link className={footerStyles.logo} to="/">
          <Icon name="logo" />
        </Link>
        <div className={footerStyles.navContainerLinks}>
          <Link to="/services">
            Services
            <div className={footerStyles.arrowRight}>
              <Icon name="arrowRight" size="10" />
            </div>
          </Link>
          <Link to="/aboutUs">
            About Us
            <div className={footerStyles.arrowRight}>
              <Icon name="arrowRight" size="10" />
            </div>
          </Link>
          <Link to="/projects">
            Featured Projects
            <div className={footerStyles.arrowRight}>
              <Icon name="arrowRight" size="10" />
            </div>
          </Link>
          <Link to="/gallery">
            Gallery
            <div className={footerStyles.arrowRight}>
              <Icon name="arrowRight" size="10" />
            </div>
          </Link>
          <Link to="/contactUs">
            Contact Us
            <div className={footerStyles.arrowRight}>
              <Icon name="arrowRight" size="10" />
            </div>
          </Link>
        </div>
        <div>
          <a
            href="https://www.facebook.com/eminentid/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="facebook" color="#C19A5B" />
          </a>
          <a
            href="https://www.instagram.com/eminentinteriordesign/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" color="#C19A5B" />
          </a>
          <a
            href="http://www.houzz.com/pro/eminentid/eminent-interior-design"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="houzz" color="#C19A5B" />
          </a>
        </div>
      </div>
      <div className={footerStyles.contacts}>
        <div>
          <Icon name="phone" />
          <div>{data.site.siteMetadata.phone}</div>
        </div>
        <div className={footerStyles.address}>
          <Icon name="address" />
          <div>{data.site.siteMetadata.address}</div>
        </div>
        <div>
          <Icon name="email" />
          <div>{data.site.siteMetadata.email}</div>
        </div>
      </div>
      <div className={footerStyles.copyright}>
        COPYRIGHT © 2021 {data.site.siteMetadata.author.toUpperCase()}. ALL
        RIGHTS RESERVED.
      </div>
    </footer>
  )
}

export default Footer
