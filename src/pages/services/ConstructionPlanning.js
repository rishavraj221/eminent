import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../../components/head"
import Layout from "../../components/layout"
import ContactUs from "../../components/contactUs"
import Icon from "../../assets/Icons"
import "./service_inside.css"

const data = {
  page_head: ["Construction", "Planning", "Minneapolis MN"],
  page_head_desc:
    "Let us help you plan the new home or remodel of your dreams. We invite you to partner with Eminent Interior Design's award-winning construction planning team Minneapolis, MN",
  hero_image: [
    <StaticImage
      src="../../assets/services_page_assets/ConstructionPlanning/hero1.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/ConstructionPlanning/hero2.png"
      alt="alt"
    />,
    <StaticImage
      src="../../assets/services_page_assets/ConstructionPlanning/hero3.png"
      alt="alt"
    />,
  ],
  head_2: ["Residential", "Construction", "Planning", "Minneapolis"],
  head_2_desc:
    "From spatial perspectives to design, Eminent helps pull it all together. We are uniquely qualified to handle everything from blueprint creation to the actual construction. ",
  service: [
    {
      other: false,
      image: (
        <StaticImage
          src="../../assets/services_page_assets/ConstructionPlanning/1.png"
          alt="alt"
        />
      ),
      title: "Construction Planning for New Homes & Remodels",
      desc: "At Eminent we are experts at striking that delicate balance between structure, flow and aesthetics, and our designers collaborate closely with architects, contractors, and most important, you, to achieve that magical harmony between all three.",
    },
    {
      other: false,
      image: (
        <StaticImage
          src="../../assets/services_page_assets/ConstructionPlanning/2.png"
          alt="alt"
        />
      ),
      title: "Get It Right with Professional Construction Planners",
      desc: "Decisions, decisions. We can help you narrow them down, with our keen eye for the knobs, faucets, tile, flooring, and fabric choices that complement and enhance your architectural plans and your personal style.",
    },
  ],
}

const ConstructionPlanning = () => {
  return (
    <Layout footerGallery={true} servicesHeader={true}>
      <Head title="Construction Planning" />
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
      <div className="head-2 head-2-cp-1">{data.head_2[0].toUpperCase()}</div>
      <div className="head-2 head-2-cp-2">{data.head_2[1].toUpperCase()}</div>
      <div className="head-2 head-2-cp-3">{data.head_2[2].toUpperCase()}</div>
      <div className="head-2 head-2-cp-4">{data.head_2[3].toUpperCase()}</div>
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
            <div className="service-card-title cp-card-title">
              {serv.title.toUpperCase()}
            </div>
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
      <ContactUs />
    </Layout>
  )
}

export default ConstructionPlanning
