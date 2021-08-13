import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

import Head from "../../components/head"
import Layout from "../../components/layout"
import ContactUs from "../../components/contactUs"
import Icon from "../../assets/Icons"
import "./service_inside.css"
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

const data = {
  page_head: ["Bath", "Design", "Minneapolis MN"],
  page_head_desc:
    "Create a spa-like bathroom to enhance your day and night routines with our bathroom designers' collaborative approach.  We invite you to partner with Eminent Interior Design's award-winning bath designers Minneapolis, MN",
  hero_image: [
    <StaticImage src="../../assets/services_page_assets/BathDesign/hero1.png" />,
    <StaticImage src="../../assets/services_page_assets/BathDesign/hero2.png" />,
    <StaticImage src="../../assets/services_page_assets/BathDesign/hero3.png" />,
  ],
  head_2: ["Bath Designers", "Minneapolis & Surrounding Areas"],
  head_2_desc:
    "Prior to beginning your remodel or new home build ease the stress with Eminent’s award-winning bath designers.",
  service: {
    images: [
      <StaticImage src="../../assets/services_page_assets/BathDesign/1.png" />,
      <StaticImage src="../../assets/services_page_assets/BathDesign/2.png" />,
      <StaticImage src="../../assets/services_page_assets/BathDesign/3.png" />,
    ],
    contents: [
      {
        head: "Planning a bathroom remodel?",
        body: "Save money, time, and stress by hiring a professional bath designer first.",
      },
      {
        head: "Let Our Specialized Bath Designers Provide a Foundation for Your Remodel or New Home",
        body: "Without the proper plan, bathrooms can garner the least amount of consideration and square feet in a home remodel or new build. However, a poorly planned bath design can impede your daily routines during hectic mornings or getting ready for bed. A well-planned bathroom design will have ample spaced toilet area, a properly configured vanity sink and all the elements necessary for hygiene and relaxation. Our custom bathroom designs encourage self-care while exuding a spa-like serenity during daily rituals.",
      },
      {
        head: "Form, Function & Beauty",
        body: "No matter the size of your bathroom, it’s essential to consider both form and function in the blueprint creation process. Your bathroom is on par with the kitchen for opportunities to make the space uniquely yours while maximizing the space.",
      },
      {
        head: "Collaboration for a Bath Design You’ll Love",
        body: "Our team sorts out layout issues and spatial concerns, resulting in a multi-dimensional plan that is beautiful and functional. We work side-by-side with you and other experts as needed-to space plan accordingly and to select everything from tiles to toilets.",
      },
    ],
  },
  spotlights: [
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/BathDesign/1.png"
        />
      ),
      title: "Contemporary Retro",
      location: "Minneapolis, Minnesota",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/BathDesign/2.png"
        />
      ),
      title: "Clean & Modern",
      location: "Minnetonka Beach, Minnesota",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/BathDesign/3.png"
        />
      ),
      title: "Colourful Traditional",
      location: "Orono, Minnesota",
    },
  ],
}

const BathDesign = () => {
  return (
    <Layout footerGallery={true} servicesHeader={true}>
      <Head title="Bath Design" />
      <div className="hero-div">
        <div className="hero-head-title interior">
          {data.page_head[0].toUpperCase()}
        </div>
        <div className="hero-head-title design">
          {data.page_head[1].toUpperCase()}
        </div>
        <div className="hero-head-title2">{data.page_head[2]}</div>
        <div className="desc">
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
            <div className="credit-title">Eminent Interior Design</div>
          </div>
          <div className="page-head-desc">{data.page_head_desc}</div>
        </div>
      </div>
      <div className="hero-image-container">
        <div className="hero-image-1">
          <StaticImage src="../../assets/services_page_assets/BathDesign/hero1.png" />
        </div>
        <div className="hero-image-2">{data.hero_image[1]}</div>
        <div className="hero-image-3">{data.hero_image[2]}</div>
      </div>
      <div className="head-2 head-kitchen">{data.head_2[0].toUpperCase()}</div>
      <div className="head-2 head-areas">{data.head_2[1].toUpperCase()}</div>
      <div className="head-2-desc">{data.head_2_desc}</div>
      <div className="kitchen-service">
        <div className="kitchen-service-images-container">
          <div className="kitchen-service-image">{data.service.images[0]}</div>
          <div className="kitchen-service-image">{data.service.images[1]}</div>
          <div className="kitchen-service-image">{data.service.images[2]}</div>
        </div>
        <div className="kitchen-service-content">
          {data.service.contents.map(content => (
            <div>
              <div className="kitchen-service-content-head">
                {content.head.toUpperCase()}
              </div>
              <div className="kitchen-service-content-body">{content.body}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="kitchen-service-content-mobile">
        <div className="kitchen-service-image-mobile">
          {data.service.images[0]}
        </div>
        <div className="kitchen-service-head-mobile">
          {data.service.contents[0].head.toUpperCase()}
        </div>
        <div className="kitchen-service-body-mobile">
          {data.service.contents[0].body}
        </div>
        <div className="kitchen-service-head-mobile">
          {data.service.contents[1].head.toUpperCase()}
        </div>
        <div className="kitchen-service-body-mobile">
          {data.service.contents[1].body}
        </div>
        <div className="kitchen-service-image-mobile">
          {data.service.images[1]}
        </div>
        <div className="kitchen-service-head-mobile">
          {data.service.contents[2].head.toUpperCase()}
        </div>
        <div className="kitchen-service-body-mobile">
          {data.service.contents[2].body}
        </div>
        <div className="kitchen-service-image-mobile">
          {data.service.images[2]}
        </div>
        <div className="kitchen-service-head-mobile">
          {data.service.contents[3].head.toUpperCase()}
        </div>
        <div className="kitchen-service-body-mobile">
          {data.service.contents[3].body}
        </div>
      </div>
      <div className="spotlight-carousel-container">
        <div className="spotlight-header">BATH SPOTLIGHTS</div>
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
                {spotlight.image}
              </div>
              <div className="spotlight-carousel-title">
                {spotlight.title.toUpperCase()}
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
      <ContactUs />
    </Layout>
  )
}

export default BathDesign
