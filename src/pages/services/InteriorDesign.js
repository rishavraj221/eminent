import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../../components/head"
import Layout from "../../components/layout"
import Icon from "../../assets/Icons"
import ContactUs from "../../components/contactUs"
import "./service_inside.css"

const data = {
  page_head: ["Interior", "Design", "Minneapolis MN"],
  page_head_desc:
    "Let us help you with the interior design of your home or remodel of your dreams. We invite you to partner with Eminent Interior Design Minneapolis award-winning design team.",
  hero_image: [
    <StaticImage
      src="../../assets/services_page_assets/InteriorDesign/hero1.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/InteriorDesign/hero2.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/InteriorDesign/hero3.png"
      alt="alt"
    />,
  ],
  head_2: "New Homes & Remodels Interior Design Services",
  head_2_desc:
    "Our team at Eminent Interior Design Minneapolis creates room layouts, presents furnishings, fabric, and paint selections for your review and approval, and unearths finishing touches of art and accessories to resonate with your individuality in surprising ways. We want our clients to feel completely at home the moment they walk into their newly designed space.",
  service: [
    {
      other: "Other factors we consider",
      image: (
        <StaticImage
          src="../../assets/services_page_assets/InteriorDesign/1.png"
          alt="alt"
        />
      ),
      title: "Storage Solutions",
      desc: "Shelves, drawers, hooks, rollouts, cubbies, built-ins, cabinets, and armoires. Our designers can help you think through your storage needs and how they will evolve over time. As a result, you can incorporate innovative, attractive storage solutions into your dream home.",
    },
    {
      other: false,
      image: (
        <StaticImage
          src="../../assets/services_page_assets/InteriorDesign/2.png"
          alt="alt"
        />
      ),
      title: "Materials and Finishes",
      desc: "Decisions, decisions. We can help you narrow them down, with our keen eye for the knobs, faucets, tile, flooring, and fabric choices that complement and enhance your architectural plans and your personal style.",
    },
    {
      other: false,
      image: (
        <StaticImage
          src="../../assets/services_page_assets/InteriorDesign/3.png"
          alt="alt"
        />
      ),
      title: "Lighting and Window Treatments",
      desc: "How does the lighting change throughout the days and seasons? What lighting and window treatments enhance the look and feel of your interior spaces? We help you answer these questions and create a lighting plan that fits your needs.",
    },
  ],
  description:
    "With us in your corner, you gain the confidence to keep your project moving in a direction you’ll be proud to reveal. In addition, we keep you on schedule by assuring decisions and orders are made in a timely fashion. ",
}

const InteriorDesign = () => {
  return (
    <Layout footerGallery={true} servicesHeader={true}>
      <Head title="Interior Design" />
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
        <div className="hero-image-1">{data.hero_image[0]}</div>
        <div className="hero-image-2">{data.hero_image[1]}</div>
        <div className="hero-image-3">{data.hero_image[2]}</div>
      </div>
      <div className="head-2">{data.head_2.toUpperCase()}</div>
      <div className="head-2-desc">{data.head_2_desc}</div>
      {data.service.map((serv, index) => (
        <div
          key={Math.random()}
          className={
            index % 2 === 0
              ? "services-service-card"
              : "services-service-card service-card-reverse"
          }
        >
          <div
            className={
              index % 2 === 0
                ? "service-info"
                : "service-info service-info-reverse"
            }
          >
            {serv.other && (
              <div className="other-info">
                <div>
                  <Icon name="dash" />
                </div>
                <div className="other-text">{serv.other}</div>
              </div>
            )}
            <div className="service-card-title">{serv.title.toUpperCase()}</div>
            <div className="service-desc">{serv.desc}</div>
          </div>
          <div
            className={
              index % 2 === 0 ? "service-image" : "service-image-reverse"
            }
          >
            {serv.image}
          </div>
        </div>
      ))}
      <div className="service-description">{data.description}</div>
      <ContactUs />
    </Layout>
  )
}

export default InteriorDesign
