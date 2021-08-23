import React, { useState } from "react"
import { graphql, navigate } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"

import Layout from "../components/layout"
import Head from "../components/head"
import Icon from "../assets/Icons"
import "./project.css"

export const query = graphql`
  query ($slug: ID) {
    prismicBlogPost(prismicId: { eq: $slug }) {
      data {
        author_description
        author_name
        blog_description
        posted_date(formatString: "MMM Do, YYYY")
        time_to_read
        author_image {
          gatsbyImageData
        }
        blog_title {
          text
        }
        body {
          ... on PrismicBlogPostDataBodyDesignList {
            slice_type
            items {
              design_name
            }
          }
          ... on PrismicBlogPostDataBodyFullWidthImage {
            primary {
              image {
                gatsbyImageData
              }
              image_caption
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyHeadingText {
            primary {
              head_text {
                text
              }
            }
            slice_type
          }
          ... on PrismicBlogPostDataBodyHighlightedText {
            slice_type
            items {
              highlighted_text
            }
          }
          ... on PrismicBlogPostDataBodyImageGallery {
            slice_type
            items {
              image_caption
              image_description
              image {
                gatsbyImageData
              }
            }
          }
          ... on PrismicBlogPostDataBodyImagesSlider {
            slice_type
            items {
              description {
                text
              }
              image {
                gatsbyImageData
              }
            }
            primary {
              description {
                text
              }
              eyebrow_headline {
                text
              }
              title {
                text
              }
            }
          }
          ... on PrismicBlogPostDataBodyParagraphText {
            slice_type
            items {
              paragraph
            }
          }
          ... on PrismicBlogPostDataBodyQuote {
            slice_type
            primary {
              quote_author
              quote_title
            }
          }
        }
        hero_image {
          gatsbyImageData
        }
      }
    }
  }
`

const Project = props => {
  const data = props.data.prismicBlogPost.data
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleNextArrow = arrLength => {
    if (currentImageIndex < arrLength - 1)
      setCurrentImageIndex(currentImageIndex + 1)
    else setCurrentImageIndex(0)
  }

  const handlePrevArrow = arrLength => {
    if (currentImageIndex > 0) setCurrentImageIndex(currentImageIndex - 1)
    else setCurrentImageIndex(arrLength - 1)
  }

  return (
    <Layout>
      <Head title={data.blog_title.text} />
      <div
        onClick={() => navigate(-1)}
        type="button"
        role="button"
        tabIndex={0}
        onKeyDown={() => <div></div>}
        className="back-to-project"
      >
        <Icon name="arrowLeft2" />
        <div>Back to Blogs</div>
      </div>
      <div className="project-title-text">
        {data.blog_title.text.toUpperCase()}
      </div>
      <div className="project-date-loc-info">
        <div>
          <Icon name="calender" />
          <div>{data.posted_date}</div>
        </div>
        <div className="project-location">
          <Icon name="clock" />
          <div>{data.time_to_read}</div>
        </div>
      </div>
      <div className="project-author-image">
        <GatsbyImage
          image={getImage(data.author_image.gatsbyImageData)}
          alt="alt"
        />
      </div>
      <div className="project-author-name">{data.author_name}</div>
      <div className="project-author-desc">{data.author_description}</div>
      <GatsbyImage
        className="project-hero-image"
        image={getImage(data.hero_image.gatsbyImageData)}
        alt="alt"
      />
      {data.body.map(slice => {
        if (slice.slice_type === "heading_text")
          return (
            <div key={Math.random()} className="slice-heading-text">
              {slice.primary.head_text.text.toUpperCase()}
            </div>
          )
        if (slice.slice_type === "paragraph_text")
          return slice.items.map(item => (
            <div key={Math.random()} className="slice-paragraph-text">
              {item.paragraph}
            </div>
          ))
        if (slice.slice_type === "full_width_image")
          return (
            <GatsbyImage
              key={Math.random()}
              className="slice-full-width-image"
              image={getImage(slice.primary.image.gatsbyImageData)}
              alt="alt"
            />
          )
        if (slice.slice_type === "image_gallery")
          return (
            <div key={Math.random()} className="slice-image-gallery">
              {slice.items.map(item => (
                <div key={Math.random()} className="slice-grid-container">
                  <GatsbyImage
                    key={Math.random()}
                    className="slice-image-grid-img"
                    image={getImage(item.image.gatsbyImageData)}
                    alt="alt"
                  />
                  {item.image_caption && (
                    <div className="slice-grid-img-caption">
                      {item.image_caption.toUpperCase()}
                    </div>
                  )}
                  {item.image_description && (
                    <div className="slice-grid-img-desc">
                      {item.image_description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )
        if (slice.slice_type === "highlighted_text")
          return slice.items.map(item => (
            <div
              key={Math.random()}
              className="slice-highlighted-text slice-paragraph-text"
            >
              {item.highlighted_text}
            </div>
          ))
        if (slice.slice_type === "quote")
          return (
            <div key={Math.random()} className="slice-quote-container">
              <div className="slice-quote-title">
                {slice.primary.quote_title.toUpperCase()}
              </div>
              <div className="quote-credit">
                <div className="dash-desktop">
                  <Icon name="dash" width="96" />
                </div>
                <div className="dash-tablet">
                  <Icon name="dash" width="72" />
                </div>
                <div className="dash-mobile">
                  <Icon name="dash" width="56" />
                </div>
                <div className="credit-title">{slice.primary.quote_author}</div>
              </div>
            </div>
          )
        if (slice.slice_type === "design_list")
          return (
            <ul key={Math.random()} className="slice-design-list">
              {slice.items.map(item => (
                <li key={Math.random()} className="slice-design-list-item">
                  {item.design_name.toUpperCase()}
                </li>
              ))}
            </ul>
          )
        if (slice.slice_type === "images_slider")
          return (
            <div className="slice-image-carousel">
              <Carousel
                key={Math.random()}
                selectedItem={currentImageIndex}
                infiniteLoop={true}
                showArrows={false}
                showThumbs={false}
                renderArrowNext={() => (
                  <div
                    type="button"
                    className="control-arrow control-next slider-arrow"
                    onClick={() => handleNextArrow(slice.items.length)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={() => handleNextArrow(slice.items.length)}
                  >
                    <Icon name="carRightArrow" />
                  </div>
                )}
                renderArrowPrev={() => (
                  <div
                    type="button"
                    className="control-arrow control-prev slider-arrow"
                    onClick={() => handlePrevArrow(slice.items.length)}
                    role="button"
                    tabIndex={0}
                    onKeyUp={() => handlePrevArrow(slice.items.length)}
                  >
                    <Icon name="carLeftArrow" />
                  </div>
                )}
                useKeyboardArrows
              >
                {slice.items.map(item => (
                  <div
                    key={Math.random()}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <GatsbyImage
                      className="slider-image"
                      image={getImage(item.image.gatsbyImageData)}
                      alt="alt"
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          )
        return <div key={Math.random()}>working on it...</div>
      })}
    </Layout>
  )
}

export default Project
