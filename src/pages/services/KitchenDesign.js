import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../../components/head"
import Layout from "../../components/layout"
import ContactUs from "../../components/contactUs"
import Icon from "../../assets/Icons"
import "./service_inside.css"

const data = {
  page_head: ["Kitchen", "Design", "Minneapolis MN"],
  page_head_desc:
    "Create the kitchen of your dreams with our kitchen designers' collaborative approach.  We invite you to partner with Eminent Interior Design's award-winning kitchen designers Minneapolis, MN",
  hero_image: [
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/hero1.png" />,
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/hero2.png" />,
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/hero3.png" />,
  ],
  head_2: ["Kitchen Designer", "Minneapolis & Surrounding Areas"],
  head_2_desc:
    "Hiring a kitchen designers in Minneapolis prior to starting a new home build or remodel eases the stress of the process for you and your family.",
  service: {
    images: [
      <StaticImage src="../../assets/services_page_assets/KitchenDesign/1.png" />,
      <StaticImage src="../../assets/services_page_assets/KitchenDesign/2.png" />,
      <StaticImage src="../../assets/services_page_assets/KitchenDesign/3.png" />,
    ],
    contents: [
      {
        head: "Are you planning a kitchen remodel?",
        body: "If so, you are probably wondering where to start. We can't stress enough the importance of hiring a kitchen designer first.",
      },
      {
        head: "Let Our Kitchen Designers Work Their Magic Before Remodeling Begins",
        body: "The layout and flow of the kitchen are crucial, and it's where our planning begins. That and other critical tasks must be performed before hiring a remodeler or starting work on your kitchen. We prefer to work with you on your kitchen design before hiring a kitchen remodeler because many crucial elements must prelude the kitchen construction.  However, we love working with remodeling companies in our area and assist with your project every step of the way.",
      },
      {
        head: "What should you do first to ensure your kitchen renovation is successful?",
        body: "Prior to engaging a remodeler or kitchen designer in Minneapolis, you'll be faced with many businesses from which to choose. We suggest vetting and getting to know the services provided by area professionals. Hiring an expert and professional remodeling team or kitchen designer is the best way to ensure your remodel is successful—meaning it will provide all the elements and style you hoped for.",
      },
      {
        head: "Contact Our Eminent Kitchen Design Team for an In-Home Consultation",
        body: "Our hope is you will accept our offer of a free kitchen design consultation before making your final choice so we may share our expert insight on how to make your kitchen renovation a success.",
      },
    ],
  },
  imageComment: [
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/ImageComment1.png" />,
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/ImageComment2.png" />,
    <StaticImage src="../../assets/services_page_assets/KitchenDesign/ImageComment3.png" />,
  ],
}

const KitchenDesign = () => {
  return (
    <Layout footerGallery={true} servicesHeader={true}>
      <Head title="Kitchen Design" />
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
          <StaticImage src="../../assets/services_page_assets/KitchenDesign/hero1.png" />
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
      <div className="image-comment-desktop">{data.imageComment[0]}</div>
      <div className="image-comment-tablet">{data.imageComment[1]}</div>
      <div className="image-comment-mobile">{data.imageComment[2]}</div>
      <ContactUs />
    </Layout>
  )
}

export default KitchenDesign
