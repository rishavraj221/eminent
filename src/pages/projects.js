import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Head from "../components/head"
import Icon from "../assets/Icons"
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
  const data = useStaticQuery(graphql`
    query {
      allPrismicProject(sort: { order: DESC, fields: data___posted_date }) {
        edges {
          node {
            prismicId
            data {
              project_title {
                text
              }
              posted_date
              project_location
              project_type
              hero_image {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `).allPrismicProject.edges

  const [pagePagNum, setPagePagNum] = useState([1, 2, 3])
  const [currentPagIndex, setCurrPagIndex] = useState(0)

  const handleDecPagination = () => {
    if (pagePagNum[0] > 1) {
      setPagePagNum([pagePagNum[0] - 1, pagePagNum[0], pagePagNum[1]])
      window.scrollTo(0, 0)
    }
  }

  const handleIncPagination = () => {
    if (pagePagNum[2] < Math.floor(data.length / 6) + 1) {
      setPagePagNum([pagePagNum[1], pagePagNum[2], pagePagNum[2] + 1])
      window.scrollTo(0, 0)
    }
  }

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
            <div key={Math.random()} className="project-tab">
              {tab}
            </div>
          ))}
        </div>
      </div>

      <div className="project-component-grid">
        {[3, 2, 2, 3, 3, 2].map((wid, index) => {
          if (!data[(pagePagNum[currentPagIndex] - 1) * 6 + index]) return null
          return (
            <div
              key={Math.random()}
              className={`gallery-image-container w-${wid}`}
            >
              <Link
                to={`/projects/${
                  data[(pagePagNum[currentPagIndex] - 1) * 6 + index].node
                    .prismicId
                }`}
                className="gallery-item project-item"
              >
                <GatsbyImage
                  className="project-image"
                  image={getImage(
                    data[(pagePagNum[currentPagIndex] - 1) * 6 + index].node
                      .data.hero_image.gatsbyImageData
                  )}
                  alt="alt"
                />
                <div className="project-title">
                  {data[
                    (pagePagNum[currentPagIndex] - 1) * 6 + index
                  ].node.data.project_title.text.toUpperCase()}
                </div>
                <div className="project-desc-container">
                  <Icon name="address" />
                  <div className="project-desc">
                    {
                      data[(pagePagNum[currentPagIndex] - 1) * 6 + index].node
                        .data.project_location
                    }
                  </div>
                </div>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="pagination-component">
        {pagePagNum[0] > 1 && (
          <div
            className="pagination-prev-button"
            onClick={handleDecPagination}
            role="button"
            tabIndex={0}
            onKeyUp={handleDecPagination}
          >
            <Icon name="arrowLeft" size="12" color="#34342E" />
            <div className="pagination-text pag-prev-text">Prev</div>
          </div>
        )}
        <div
          style={{
            color: currentPagIndex === 0 ? "#c19a5b" : "#34342E",
            opacity: currentPagIndex === 0 ? 1 : 0.5,
          }}
          className="pagination-text"
          onClick={() => {
            setCurrPagIndex(0)
            window.scrollTo(0, 0)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => setCurrPagIndex(0)}
        >
          {pagePagNum[0]}
        </div>
        {data.length > 6 && (
          <div
            style={{
              color: currentPagIndex === 1 ? "#c19a5b" : "#34342E",
              opacity: currentPagIndex === 1 ? 1 : 0.5,
            }}
            className="pagination-text"
            onClick={() => {
              setCurrPagIndex(1)
              window.scrollTo(0, 0)
            }}
            role="button"
            tabIndex={0}
            onKeyDown={() => setCurrPagIndex(1)}
          >
            {pagePagNum[1]}
          </div>
        )}
        {data.length > 6 * 2 && (
          <div
            style={{
              color: currentPagIndex === 2 ? "#c19a5b" : "#34342E",
              opacity: currentPagIndex === 2 ? 1 : 0.5,
            }}
            className="pagination-text"
            onClick={() => {
              setCurrPagIndex(2)
              window.scrollTo(0, 0)
            }}
            role="button"
            tabIndex={0}
            onKeyDown={() => setCurrPagIndex(2)}
          >
            {pagePagNum[2]}
          </div>
        )}
        {pagePagNum[2] < Math.floor(data.length / 6) + 1 && (
          <div
            className="pagination-prev-button"
            onClick={handleIncPagination}
            role="button"
            tabIndex={0}
            onKeyDown={handleIncPagination}
          >
            <div className="pagination-text pag-next-text">Next</div>
            <Icon name="arrowRight" size="12" color="#34342E" />
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Projects
