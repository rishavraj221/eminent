import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import "./projects.css"

const tabs = [
  "All",
  "Living",
  "Kitchen",
  "Bathroom",
  "Interior",
  "Minimalist",
  "Modern",
  "Traditional",
  "Contemporary",
]

const Projects = () => {
  return (
    <Layout>
      <Head title="Projects" />
      <div className="gallery-margin-top"></div>
      <div>
        <div className="about-us-head brandi-head">FEATURED</div>
        <div className="about-us-head au-head-3">PROJECTS</div>
        <div className="about-us-head-2">Our Works</div>
      </div>
      <div className="project-tabs-container">
        <div className="project-tabs">
          {tabs.map(tab => (
            <div className="project-tab">{tab}</div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects
