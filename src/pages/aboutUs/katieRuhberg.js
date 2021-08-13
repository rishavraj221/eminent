import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

import Head from "../../components/head"
import Layout from "../../components/layout"
import Icon from "../../assets/Icons"

const data = {
  ownerName: ["katie", "Ruhberg"],
  role: "Senior Designer",
  quote: `"The most successful projects come from a collaboration of all trades — architect, builder, designer."`,
  bioAwards: {
    title: [
      "After graduating from Mankato State with a BS in interior design and construction management, Katie worked at several firms before joining Eminent. These prior positions gave her a fantastic opportunity to build an impressive project portfolio.",

      "Katie continues to grow her legacy here at Eminent as our senior designer. She adds not only infinite skill and creativity to our team but a spunky personality everyone loves. She draws inspiration from her surroundings and architecture. Her favorite statement piece is an amazing wallpaper or light fixture. Where better to showcase those elements but her favorite room to design — a fabulous powder room!",
      "While she enjoys many aspects of her work, The most rewarding part comes with the completion of a home design and seeing the client's reaction.",

      "A city girl at heart, Katie loves living in the St Anthony Historic area of Minneapolis. During her free time Katie enjoys dancing and spending time at her favorite Minnesota spot, her family’s Two Harbors, MN lake house.",
    ],
  },
  spotlights: [
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/InteriorDesign/1.png"
        />
      ),
      title: "Contemporary Retro",
      location: "Minneapolis, Minnesota",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/InteriorDesign/2.png"
        />
      ),
      title: "Clean & Modern",
      location: "Minnetonka Beach, Minnesota",
    },
    {
      image: (
        <StaticImage
          className="spotlight-carousel-image"
          src="../../assets/services_page_assets/InteriorDesign/3.png"
        />
      ),
      title: "Colourful Traditional",
      location: "Orono, Minnesota",
    },
  ],
}

const heroContent1 = (
  <div className="brandi-hagen-quote-container">
    <div className="bh-quote-head">{`${data.ownerName[0].toUpperCase()} ${data.ownerName[1].toUpperCase()}`}</div>
    <div className="quote-credit">
      <div className="dash-desktop">
        <Icon name="dash" width="44" />
      </div>
      <div className="dash-tablet">
        <Icon name="dash" width="50" />
      </div>
      <div className="dash-mobile">
        <Icon name="dash" width="36" />
      </div>
      <div className="credit-title">{data.role}</div>
    </div>
    <div className="bh-quote-body">{data.quote}</div>
  </div>
)
const heroContent2 = (
  <div>
    <div className="about-us-head brandi-head">
      {data.ownerName[0].toUpperCase()}
    </div>
    <div className="about-us-head au-head-3">
      {data.ownerName[1].toUpperCase()}
    </div>
    <div className="about-us-head-2">About</div>
  </div>
)
const heroContent3 = (
  <div className="bh-hero-image">
    <StaticImage src="../../assets/aboutUs/katie.png" />
  </div>
)

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

const KatieRuhberg = () => {
  return (
    <Layout>
      <Head title="Katie Ruhberg" />
      <div className="brandi-hagen-hero-container">
        {heroContent1}
        {heroContent2}
        {heroContent3}
      </div>
      <div className="brandi-hagen-hero-mobile-container">
        {heroContent2}
        {heroContent3}
        {heroContent1}
      </div>
      <div className="bh-bio-container">
        <div className="bh-image-2-container">
          <StaticImage
            className="bh-image-2"
            src="../../assets/aboutUs/katie_pic_2.png"
          />
        </div>
        <div className="bh-bio-content-container">
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
            <div className="credit-title">{data.role}</div>
          </div>
          <div className="bh-bio-title-container">
            {data.bioAwards.title.map(bio => (
              <div className="bh-bio-title">{bio}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="spotlight-carousel-container">
        <div className="spotlight-header">KATIE'S</div>
        <div className="spotlight-header-2">FEATURED PROJECTS</div>
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
    </Layout>
  )
}

export default KatieRuhberg
