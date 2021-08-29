import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Carousel } from "react-responsive-carousel"
import { default as Carousel2 } from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import Head from "../components/head"
import Layout from "../components/layout"
import Icon from "../assets/Icons"
import "./index.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allPrismicHomePage {
        edges {
          node {
            data {
              slider {
                designed_by
                image_title {
                  text
                }
                slider_image {
                  gatsbyImageData
                }
              }
              what_we_offer {
                service_image {
                  gatsbyImageData
                }
                service_title {
                  text
                }
                service_description
                link_to
              }
              about_eminent_desc {
                image_1 {
                  gatsbyImageData
                }
                image_2 {
                  gatsbyImageData
                }
                description
              }
              authors {
                image {
                  gatsbyImageData
                }
                job_type
                name {
                  text
                }
                about
                discover_more_endpoint
              }
              team_members {
                image {
                  gatsbyImageData
                }
                full_name {
                  text
                }
                role
              }
              quotes {
                quote
              }
              featured_projects {
                image {
                  gatsbyImageData
                }
                project_name {
                  text
                }
                location
              }
            }
          }
        }
      }
    }
  `).allPrismicHomePage.edges[0].node.data

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [currentFPIndex, setCurrentFPIndex] = useState(0) // for featured projects mobile carousel

  const handleNextArrow = () => {
    if (currentImageIndex < data.slider.length - 1)
      setCurrentImageIndex(currentImageIndex + 1)
    else setCurrentImageIndex(0)
  }

  const handlePrevArrow = () => {
    if (currentImageIndex > 0) setCurrentImageIndex(currentImageIndex - 1)
    else setCurrentImageIndex(data.slider.length - 1)
  }

  const handleNextQuote = () => {
    if (currentQuoteIndex < data.quotes.length - 1)
      setCurrentQuoteIndex(currentQuoteIndex + 1)
    else setCurrentQuoteIndex(0)
  }

  const handlePrevQuote = () => {
    if (currentQuoteIndex > 0) setCurrentQuoteIndex(currentQuoteIndex - 1)
    else setCurrentQuoteIndex(data.quotes.length - 1)
  }

  const handleNextFP = () => {
    if (currentFPIndex < data.featured_projects.length - 1)
      setCurrentFPIndex(currentFPIndex + 1)
    else setCurrentFPIndex(0)
  }

  const handlePrevFP = () => {
    if (currentFPIndex > 0) setCurrentFPIndex(currentFPIndex - 1)
    else setCurrentFPIndex(data.featured_projects.length - 1)
  }

  return (
    <Layout footerGallery={true}>
      <Head title="Home" />
      <Carousel
        selectedItem={currentImageIndex}
        infiniteLoop={true}
        showArrows={false}
        showThumbs={false}
        renderArrowNext={() => (
          <div
            type="button"
            className="control-arrow control-next slider-arrow"
            onClick={handleNextArrow}
            role="button"
            tabIndex={0}
            onKeyDown={handleNextArrow}
          >
            <Icon name="SliderRight" />
          </div>
        )}
        renderArrowPrev={() => (
          <div
            type="button"
            className="control-arrow control-prev slider-arrow"
            onClick={handlePrevArrow}
            role="button"
            tabIndex={0}
            onKeyUp={handlePrevArrow}
          >
            <Icon name="SliderLeft" />
          </div>
        )}
        useKeyboardArrows
      >
        {data.slider.map(item => (
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
              image={getImage(item.slider_image.gatsbyImageData)}
              alt="alt"
            />
            <div className="sliderHeader">
              {item.image_title.text.toUpperCase()}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="sliderProjectDetail">
        <div>
          <a
            href="https://www.facebook.com/eminentid/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="facebook" color="rgba(52, 52, 46, 0.3)" size={22} />
          </a>
          <a
            href="https://www.instagram.com/eminentinteriordesign/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="instagram" color="rgba(52, 52, 46, 0.3)" size={22} />
          </a>
          <a
            href="http://www.houzz.com/pro/eminentid/eminent-interior-design"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="houzz" color="rgba(52, 52, 46, 0.3)" size={22} />
          </a>
        </div>
        <div className="readMore">
          Read More
          <div style={{ marginLeft: 8 }}>
            <Icon name="arrowRight" size={14} color="rgba(193, 154, 91, 1)" />
          </div>
        </div>
        <div>Designed By {data.slider[currentImageIndex].designed_by}</div>
      </div>
      <div className="services">
        <div className="service-title">WHAT </div>
        <div className="service-title title-b">WE OFFER</div>
        <div className="service-styled">Services</div>
        <div className="services-gallery-container-outer">
          <div className="services-gallery">
            {data.what_we_offer.map(offer => (
              <Link
                key={Math.random()}
                to={`/services/${offer.link_to}`}
                className="services-gallery-item w-1"
              >
                <GatsbyImage
                  image={getImage(offer.service_image.gatsbyImageData)}
                  alt="alt"
                />
                <div className="service-image-title">
                  {offer.service_title.text.toUpperCase()}
                </div>
                <div className="service-image-desc">
                  {offer.service_description}
                  <div className="about-read-me">
                    Read More
                    <div style={{ marginLeft: 10 }}>
                      <Icon name="arrowRight" color="#C19A5B" size="12" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Link to="/services" className="service-btn">
        <div className="service-btn-desktop">
          <Icon name="ourServicesBtn" />
        </div>
        <div className="service-btn-tablet">
          <Icon name="ourServicesBtn" size={150} />
        </div>
        <div className="service-btn-mobile">
          <Icon name="ourServicesBtn" size={125} />
        </div>
      </Link>
      <div className="about">
        <div className="about-images">
          <GatsbyImage
            className="about-image-1"
            image={getImage(data.about_eminent_desc[0].image_1.gatsbyImageData)}
            alt="alt"
          />
          <GatsbyImage
            className="about-image-2"
            image={getImage(data.about_eminent_desc[0].image_2.gatsbyImageData)}
            alt="alt"
          />
        </div>
        <div className="about-content">
          <div className="about-head about-head-1">ABOUT</div>
          <div className="about-head about-head-2">EMINENT</div>
          <div className="interior-design">Interior Design</div>
          <div className="about-description">
            <div>{data.about_eminent_desc[0].description}</div>
            <Link to="/aboutUs" className="about-read-me">
              Read More
              <div style={{ marginLeft: 10 }}>
                <Icon name="arrowRight" color="#C19A5B" size="12" />
              </div>
            </Link>
          </div>
        </div>
      </div>
      {data.authors.map((author, index) => (
        <div
          key={Math.random()}
          className={index % 2 === 0 ? "authors" : "authors authors-reverse"}
        >
          <div className="author-desc">
            <div className="author-title">{author.name.text.toUpperCase()}</div>
            <div className="author-role">
              <Icon name="dash" />
              <div>{author.job_type}</div>
            </div>
            <div className="author-about">{author.about}</div>
            <Link
              to={`/aboutUs/${author.discover_more_endpoint}`}
              className="discover-more-btn"
            >
              Discover More
              <div style={{ marginLeft: 10 }}>
                <Icon name="arrowRight" color="#C19A5B" size="15" />
              </div>
            </Link>
          </div>
          <div className="author-image">
            <GatsbyImage
              image={getImage(author.image.gatsbyImageData)}
              alt="alt"
            />
          </div>
        </div>
      ))}
      <Carousel2
        className="team-members"
        responsive={responsive}
        draggable
        swipeable
      >
        {data.team_members.map(team_member => (
          <div key={Math.random()} className="team-member">
            <div>
              <div className="team-member-image">
                <GatsbyImage
                  image={getImage(team_member.image.gatsbyImageData)}
                  alt="alt"
                />
              </div>

              <div className="team-member-name">
                {team_member.full_name.text.toUpperCase()}
              </div>
              <div className="author-role">
                <Icon name="dash" />
                <div>{team_member.role}</div>
              </div>
            </div>
          </div>
        ))}
        {data.team_members.map(team_member => (
          <div key={Math.random()} className="team-member">
            <div>
              <div className="team-member-image">
                <GatsbyImage
                  image={getImage(team_member.image.gatsbyImageData)}
                  alt="alt"
                />
              </div>

              <div className="team-member-name">
                {team_member.full_name.text.toUpperCase()}
              </div>
              <div className="author-role">
                <Icon name="dash" />
                <div>{team_member.role}</div>
              </div>
            </div>
          </div>
        ))}
      </Carousel2>
      <div className="quotes">
        <div className="quote-icon-desktop">
          <Icon name="quote" />
        </div>
        <div className="quote-icon-tablet">
          <Icon name="quote" size="110" />
        </div>
        <div className="quote-icon-mobile">
          <Icon name="quote" size="90" />
        </div>
        <div className="quote-carousel">
          <Carousel
            className="quote-slider"
            selectedItem={currentQuoteIndex}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            renderArrowNext={() => (
              <div
                type="button"
                className="control-arrow control-next slider-arrow"
                onClick={handleNextQuote}
                role="button"
                tabIndex={0}
                onKeyDown={handleNextQuote}
              >
                <Icon name="carrightarrow" />
              </div>
            )}
            renderArrowPrev={() => (
              <div
                type="button"
                className="control-arrow control-prev slider-arrow"
                onClick={handlePrevQuote}
                role="button"
                tabIndex={0}
                onKeyUp={handlePrevQuote}
              >
                <Icon name="carleftarrow" />
              </div>
            )}
            useKeyboardArrows
          >
            {data.quotes.map(quote => (
              <div key={Math.random()} className="quote-text">
                {quote.quote}
              </div>
            ))}
          </Carousel>
        </div>
        <div className="service-title">FEATURED </div>
        <div className="service-title title-b">PROJECTS</div>
        <div className="service-styled">Our Works</div>
        <div className="featured-projects">
          <div>
            <div className="wide-project">
              <GatsbyImage
                className="featured-project-image"
                image={getImage(
                  data.featured_projects[0].image.gatsbyImageData
                )}
                alt="alt"
              />
              <div className="featured-project-title">
                {data.featured_projects[0].project_name.text.toUpperCase()}
              </div>
              <div className="featured-project-location">
                <Icon name="address" />
                <div>{data.featured_projects[0].location}</div>
              </div>
            </div>
            <div style={{ width: 24 }}></div>
            <div className="sqr-project">
              <GatsbyImage
                className="featured-project-image"
                image={getImage(
                  data.featured_projects[1].image.gatsbyImageData
                )}
                alt="alt"
              />
              <div className="featured-project-title">
                {data.featured_projects[1].project_name.text.toUpperCase()}
              </div>
              <div className="featured-project-location">
                <Icon name="address" />
                <div>{data.featured_projects[1].location}</div>
              </div>
            </div>
          </div>
          <div>
            <div className="sqr-project">
              <GatsbyImage
                className="featured-project-image"
                image={getImage(
                  data.featured_projects[2].image.gatsbyImageData
                )}
                alt="alt"
              />
              <div className="featured-project-title">
                {data.featured_projects[2].project_name.text.toUpperCase()}
              </div>
              <div className="featured-project-location">
                <Icon name="address" />
                <div>{data.featured_projects[2].location}</div>
              </div>
            </div>
            <div style={{ width: 24 }}></div>
            <div className="wide-project">
              <GatsbyImage
                className="featured-project-image"
                image={getImage(
                  data.featured_projects[3].image.gatsbyImageData
                )}
                alt="alt"
              />
              <div className="featured-project-title">
                {data.featured_projects[3].project_name.text.toUpperCase()}
              </div>
              <div className="featured-project-location">
                <Icon name="address" />
                <div>{data.featured_projects[3].location}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature-projects-mobile">
          <Carousel
            selectedItem={currentFPIndex}
            infiniteLoop={true}
            showArrows={false}
            showThumbs={false}
            renderArrowNext={() => (
              <div
                type="button"
                className="control-arrow control-next slider-arrow"
                onClick={handleNextFP}
                role="button"
                tabIndex={0}
                onKeyDown={handleNextFP}
              >
                <Icon name="carrightarrow" />
              </div>
            )}
            renderArrowPrev={() => (
              <div
                type="button"
                className="control-arrow control-prev slider-arrow"
                onClick={handlePrevFP}
                role="button"
                tabIndex={0}
                onKeyUp={handlePrevFP}
              >
                <Icon name="carleftarrow" />
              </div>
            )}
            useKeyboardArrows
          >
            {data.featured_projects.map(project => (
              <div key={Math.random()} className="team-member">
                <div>
                  <div>
                    <GatsbyImage
                      className="team-member-image"
                      image={getImage(project.image.gatsbyImageData)}
                      alt="alt"
                    />
                  </div>

                  <div className="team-member-name">
                    {project.project_name.text.toUpperCase()}
                  </div>
                  <div className="author-role">
                    <Icon name="address" />
                    <div>{project.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
