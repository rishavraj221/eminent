import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Head from "../../components/head"
import Layout from "../../components/layout"
import Icon from "../../assets/Icons"
import "./services.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1700 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicServices {
        edges {
          node {
            data {
              hero_image {
                gatsbyImageData
              }
              services {
                service_title {
                  text
                }
                image {
                  gatsbyImageData
                }
                endpoint
              }
              spotlights {
                image {
                  gatsbyImageData
                }
                title {
                  text
                }
                location
              }
            }
          }
        }
      }
    }
  `).allPrismicServices.edges[0].node.data
  return (
    <Layout footerGallery={true}>
      <Head title="Services" />
      <div className="hero-image">
        <GatsbyImage image={getImage(data.hero_image.gatsbyImageData)} />
        <div className="hero-image-content">
          <div className="hero-title hero-title-1">OUR</div>
          <div className="hero-title hero-title-2">SERVICES</div>
          <div className="hero-sub-title">Eminent</div>
        </div>
      </div>
      <div className="what-we-offer">WHAT WE OFFER</div>
      {data.services.map((service, index) => (
        <div className="service-card">
          <div className="service-info">
            <div className="service-index">
              {(index + 1).toLocaleString("en-US", {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}
            </div>
            <div className="service-title-text">
              {service.service_title.text.toUpperCase()}
            </div>
            <Link
              to={`/services/${service.endpoint}`}
              className="service-full-info"
            >
              FULL INFO +
            </Link>
          </div>
          <div className="service-image">
            <GatsbyImage image={getImage(service.image.gatsbyImageData)} />
          </div>
        </div>
      ))}
      <div className="spotlight-carousel-container">
        <div className="spotlight-header">SPOTLIGHTS</div>
        <Carousel
          className="spotlight-carousel"
          responsive={responsive}
          draggable
          swipeable
          additionalTransfrom={-20 * 5}
        >
          {data.spotlights.map(spotlight => (
            <div className="spotlight-project">
              <div className="spotlight-carousel-image-container">
                <GatsbyImage
                  className="spotlight-carousel-image"
                  image={getImage(spotlight.image.gatsbyImageData)}
                />
              </div>
              <div className="spotlight-carousel-title">
                {spotlight.title.text.toUpperCase()}
              </div>
              <div className="spotlight-carousel-location">
                <div>
                  <Icon name="address" />
                </div>
                <div className="spotlight-carousel-location-string">
                  {spotlight.location}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Layout>
  )
}

export default ServicesPage
