import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Head from "../components/head"
import Icon from "../assets/Icons"
import Layout from "../components/layout"
import "./blogs.css"
import "./projects.css"

const Blogs = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicBlogPost(sort: { order: DESC, fields: data___posted_date }) {
        edges {
          node {
            prismicId
            data {
              blog_title {
                text
              }
              posted_date(formatString: "MMM Do, YYYY")
              time_to_read
              hero_image {
                gatsbyImageData
              }
              blog_description
            }
          }
        }
      }
    }
  `).allPrismicBlogPost.edges

  const [pagePagNum, setPagePagNum] = useState([1, 2, 3])
  const [currentPagIndex, setCurrPagIndex] = useState(0)

  const handleDecPagination = () => {
    if (pagePagNum[0] > 1) {
      setPagePagNum([pagePagNum[0] - 1, pagePagNum[0], pagePagNum[1]])
      window.scrollTo(0, 0)
    }
  }

  const handleIncPagination = () => {
    if (pagePagNum[2] < Math.floor(data.length / 8) + 1) {
      setPagePagNum([pagePagNum[1], pagePagNum[2], pagePagNum[2] + 1])
      window.scrollTo(0, 0)
    }
  }

  return (
    <Layout>
      <Head title="Blogs" />
      <div className="gallery-margin-top"></div>
      <div>
        <div className="about-us-head brandi-head">LEARN MORE</div>
        <div className="about-us-head au-head-3">WITH</div>
        <div className="about-us-head-2">Our Blog</div>
      </div>

      <div className="blogs-container"></div>
      {[0, 0, 0, 0, 0, 0, 0, 0].map((i, index) => {
        if (!data[(pagePagNum[currentPagIndex] - 1) * 8 + index]) return null
        return (
          <div key={Math.random()} className="blog-container">
            <GatsbyImage
              className="blog-image"
              image={getImage(
                data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node.data
                  .hero_image.gatsbyImageData
              )}
              alt="alt"
            />
            <div className="blog-desc-container">
              <Link
                to={`/blogs/${
                  data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node
                    .prismicId
                }`}
                className="blog-desc-header"
              >
                {data[
                  (pagePagNum[currentPagIndex] - 1) * 8 + index
                ].node.data.blog_title.text.toUpperCase()}
              </Link>
              <div className="blog-desc-desc-text">
                {
                  data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node.data
                    .blog_description
                }
              </div>
              <Link
                to={`/blogs/${
                  data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node
                    .prismicId
                }`}
                className="blog-desc-read-more-cont"
              >
                Read More
                <div style={{ marginLeft: 8 }}>
                  <Icon
                    name="arrowRight"
                    size={12}
                    color="rgba(193, 154, 91, 1)"
                  />
                </div>
              </Link>
              <div className="project-date-loc-info">
                <div>
                  <Icon name="calender" />
                  <div>
                    {
                      data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node
                        .data.posted_date
                    }
                  </div>
                </div>
                <div className="project-location">
                  <Icon name="clock" />
                  <div>
                    {
                      data[(pagePagNum[currentPagIndex] - 1) * 8 + index].node
                        .data.time_to_read
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
      <div className="gallery-margin-top"></div>
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
        {data.length > 8 * 2 && (
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
        {pagePagNum[2] < Math.floor(data.length / 8) + 1 && (
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

export default Blogs
