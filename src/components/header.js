import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Icon from "../assets/Icons"
import * as headerStyles from "./header.module.scss"

const activeLinkStyle = {
  color: "#C19A5B",
  borderBottom: "1px solid #C19A5B",
}

const Header = ({ servicesSection = false }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          email
          address
          phone
        }
      }
    }
  `)

  return (
    <header
      className={headerStyles.container}
      style={{
        backgroundColor: menuOpen ? "#34342E" : "white",
        boxShadow: servicesSection
          ? "0px 6px 12px rgba(84, 70, 64, 0.06)"
          : "0px",
      }}
    >
      <div className={headerStyles.headContainer}>
        <nav className={headerStyles.navContainer}>
          <div
            className={headerStyles.menuIcon}
            onClick={() => setMenuOpen(!menuOpen)}
            role="button"
            tabIndex={0}
            onKeyDown={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <div style={{ marginLeft: "3%" }}>
                <Icon name="cross" color="white" />
              </div>
            ) : (
              <Icon name="menu" />
            )}
          </div>
          <Link
            className={headerStyles.navItem}
            to="/services"
            style={{ color: menuOpen ? "white" : "#34342e" }}
          >
            Services
          </Link>
          <Link
            className={headerStyles.navItem}
            to="/aboutUs"
            style={{ color: menuOpen ? "white" : "#34342e" }}
          >
            About Us
          </Link>
          <Link
            className={headerStyles.navItem}
            to="/projects"
            style={{ color: menuOpen ? "white" : "#34342e" }}
          >
            Projects
          </Link>
          <Link
            className={headerStyles.navItem}
            to="/gallery"
            style={{ color: menuOpen ? "white" : "#34342e" }}
          >
            Gallery
          </Link>
        </nav>
        <Link className={headerStyles.logo} to="/">
          {menuOpen ? <Icon name="logoLight" /> : <Icon name="logo" />}
        </Link>

        <div
          className={headerStyles.contact}
          style={{ color: menuOpen ? "white" : "#34342e" }}
        >
          <div className={headerStyles.email}>
            {data.site.siteMetadata.email}
          </div>
          <div className={headerStyles.phone}>
            {data.site.siteMetadata.phone}
          </div>
        </div>
        <div
          className={headerStyles.copyright}
          style={{ color: menuOpen ? "white" : "#34342e" }}
        >
          © 2021
        </div>
      </div>
      {menuOpen && (
        <div className={headerStyles.headerContent}>
          <div>
            <h1>
              <Link to="/" activeStyle={activeLinkStyle}>
                HOME
              </Link>
            </h1>
            <h2>/</h2>
            <h1>
              <Link to="/services" activeStyle={activeLinkStyle}>
                SERVICES
              </Link>
            </h1>
            <h2>/</h2>
            <h1>
              <Link to="/projects" activeStyle={activeLinkStyle}>
                PROJECTS
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/gallery" activeStyle={activeLinkStyle}>
                GALLERY
              </Link>
            </h1>
            <h2>/</h2>
            <h1>
              <Link to="/aboutUs" activeStyle={activeLinkStyle}>
                ABOUT
              </Link>
            </h1>
            <h2>/</h2>
            <h1>
              <Link to="/blogs" activeStyle={activeLinkStyle}>
                BLOG
              </Link>
            </h1>
          </div>
          <div>
            <h1>
              <Link to="/contactUs" activeStyle={activeLinkStyle}>
                CONTACT
              </Link>
            </h1>
          </div>
          <div className={headerStyles.headerBottomContent}>
            <div>
              <Icon name="phone" color="#C19A5B" />
              <div>{data.site.siteMetadata.phone}</div>
            </div>
            <div>
              <Icon name="address" color="#C19A5B" />
              <div>{data.site.siteMetadata.address}</div>
            </div>
            <div>
              <Icon name="email" color="#C19A5B" />
              <div>{data.site.siteMetadata.email}</div>
            </div>
          </div>
        </div>
      )}
      {servicesSection && (
        <div className={headerStyles.servicesHeaderContainer}>
          <div className={headerStyles.servicesStickyBar}></div>
          <div className={headerStyles.servicesStickyContainer}>
            <Link to="/services/InteriorDesign" activeStyle={activeLinkStyle}>
              Interior Design
            </Link>
            <Link to="/services/KitchenDesign" activeStyle={activeLinkStyle}>
              Kitchen Design
            </Link>
            <Link to="/services/BathDesign" activeStyle={activeLinkStyle}>
              Bathroom Design
            </Link>
            <Link
              to="/services/ConstructionPlanning"
              activeStyle={activeLinkStyle}
            >
              Construction Planning
            </Link>
            <Link to="/services/Furnishings" activeStyle={activeLinkStyle}>
              Furnishings
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
