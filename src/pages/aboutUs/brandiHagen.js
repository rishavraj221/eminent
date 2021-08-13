import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Carousel from "react-multi-carousel"

import Head from "../../components/head"
import Layout from "../../components/layout"
import Icon from "../../assets/Icons"

const data = {
  ownerName: ["Brandi", "Hagen"],
  role: "Principal Designer / Owner",
  quote: `"When designing for my clients, then it’s about their style, but with my resources, training, and my team's expertise layered on top. It’s like we do a design mind-meld – and that’s when it’s so fun, and the results are so exciting."`,
  bioAwards: {
    title: [
      "Brandi Hagen of Eminent Interior Design is an award-winning interior designer based in Minneapolis, MN with more than 25 years of industry experience. Her designs have been showcased both locally on Kare-11’s Today Show and nationally on HGTV. She has been published in many magazines including Architectural Digest, Minneapolis / St. Paul, Midwest Home & Garden, Artful Living and many more.",
      "Brandi’s interior design portfolio has a vast array of projects from sleek contemporary to formal traditional. Included in her current are new construction, interior design and remodeling projects with many of the Twin Cities’ top builders and architects.",
    ],
    awardsList: [
      "First place honors for a residential bath design – Minnesota Chapter of the American Society of Interior Designers",
      "First place honors for a residential “Multiple Rooms – Non Construction” – Minnesota Chapter of the American Society of Interior Designers",
      "Honorable Mention for “Kitchen – Construction up to 350 sq/ft” – Minnesota Chapter of the American Society of Interior Designers",
      "Recognized among young, successful community leaders in “40 Under Forty” feature – Minneapolis-St. Paul Business Journal",
    ],
    volunteerismTitle:
      "A dedicated, longtime and active volunteer, Brandi devotes her time, energy and passion to the following community organizations:",
    volunteerismList: [
      "Board member, Greater Minneapolis Crisis Nursery",
      "Junior League of Minneapolis",
      "American Society of Interior Designers",
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
    <StaticImage src="../../assets/aboutUs/owner.png" />
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

const BrandiHagen = () => {
  return (
    <Layout>
      <Head title="Brandi Hagen" />
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
            src="../../assets/aboutUs/owner_pic_2.png"
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
          <div className="bh-awards-head">AWARDS</div>
          <ul className="bh-awards-container">
            {data.bioAwards.awardsList.map(award => (
              <li className="bh-award">{award}</li>
            ))}
          </ul>
          <div className="bh-awards-head">VOLUNTEERISM</div>
          <div className="bh-volunteerism-title">
            {data.bioAwards.volunteerismTitle}
          </div>
          <ul className="bh-awards-container">
            {data.bioAwards.volunteerismList.map(volunteer => (
              <li className="bh-award">{volunteer}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="spotlight-carousel-container">
        <div className="spotlight-header">BRANDI'S</div>
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

export default BrandiHagen
