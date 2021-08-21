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
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1700, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const data = {
  page_head: ["Furnishings", "Minneapolis MN"],
  page_head_desc:
    "Let our award-winning interior designers help you select your home's furnishings Minneapolis/St Paul and surrounding areas.",
  hero_image: [
    <StaticImage
      src="../../assets/services_page_assets/Furnishings/hero1.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/Furnishings/hero2.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/Furnishings/hero3.png"
      alt="alt"
    />,
  ],
  head_2: ["Furnishings", "Minneapolis"],
  head_2_desc:
    "Whether we are designing a master interior plan for you or creating a furniture plan and procurement thereof, we will find the best products to fit your budget, decor style and household.",
  head_3: "Furnishings for new home, existing home & remodeled home",
  head_3_desc:
    "Our team works with major furniture brands and soft goods workshops to fill your home with beauty, style and high functionality. From lighting to window treatments to sofas and bedding, we partner with you to find those items to make your heart sing and provide uber comfort.",

  providings: [
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/Furnishings/1.png"
          alt="alt"
        />
      ),
      title: "Sofas",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/Furnishings/2.png"
          alt="alt"
        />
      ),
      title: "Windows",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/Furnishings/3.png"
          alt="alt"
        />
      ),
      title: "Bedding",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/Furnishings/4.png"
          alt="alt"
        />
      ),
      title: "Tables",
    },
  ],
}

const Furnishings = () => {
  return (
    <Layout footerGallery={true} servicesHeader={true}>
      <Head title="Furnishings" />
      <div className="hero-div">
        <div className="hero-head-title furnishings">
          {data.page_head[0].toUpperCase()}
        </div>
        <div className="hero-head-title2">{data.page_head[1]}</div>
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
          <StaticImage
            src="../../assets/services_page_assets/Furnishings/hero1.png"
            alt="alt"
          />
        </div>
        <div className="hero-image-2">{data.hero_image[1]}</div>
        <div className="hero-image-3">{data.hero_image[2]}</div>
      </div>
      <div className="head-2 head-furnishing-1">
        {data.head_2[0].toUpperCase()}
      </div>
      <div className="head-2 head-furnishing-2">
        {data.head_2[1].toUpperCase()}
      </div>
      <div className="head-2-desc">{data.head_2_desc}</div>
      <div className="head-3">{data.head_3.toUpperCase()}</div>
      <div className="head-3-desc">{data.head_3_desc}</div>
      <div className="spotlight-carousel-container">
        <div className="spotlight-header">WHAT DO WE PROVIDE?</div>
        <Carousel
          className="furnishing-carousel"
          responsive={responsive}
          draggable
          swipeable
          additionalTransfrom={-20 * 5}
        >
          {data.providings.map(spotlight => (
            <div key={Math.random()} className="furnishing-project">
              <div className="furnishing-carousel-image-container">
                {spotlight.image}
              </div>
              <div className="spotlight-carousel-title">
                {spotlight.title.toUpperCase()}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <ContactUs />
    </Layout>
  )
}

export default Furnishings
