import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Head from "../../components/head"
import Layout from "../../components/layout"
import Icon from "../../assets/Icons"
import "./aboutUs.css"

const data = {
  heroContent: [
    "From start to completion of your project, we collaborate with you as equal partners to assure your home is everything you dreamt it could be.",

    "We’re passionate about helping people create whatever it is they are imagining. Often, they know what they want, they have a feeling, but they don’t quite know how to get there. It’s like they’ve seen it in a dream, but the details are fuzzy. So, it’s a collaborative process, where we bring our talent and resources, and really work hard to bring that vision to life – and make it real.",

    "For most people, who don’t practice design every day and think about it the way we do, it’s difficult to articulate exactly what they’re aiming for and that’s where our team has a big responsibility… Our clients rely on us to fill in the blanks and help them create something beautiful and feels great to live in.",

    "It’s not our job to tell clients what they want – we really have to help them bring their own vision to life. That’s where collaboration comes in.",

    "This means we are there with you every step of the way, from lighting plans to space planning to furnishings. Eminent Interior Design takes a holistic look at your project and our talented staff works with structural engineers, architects, and whoever else is needed to make your dream a reality.",
  ],
  ourMissionContent: {
    believeList: [
      {
        title: "Aesthetics",
        body: "enhancing beauty, personality and artistry.",
      },
      {
        title: "Usability",
        body: "making spaces more practical, effortless and easy.",
      },
    ],
    quote: [
      "Our role is to make life in your home easy, enjoyable, and as satisfying as possible. We think deeply about the granular details of daily living, as well as your family’s individual and collective needs.",

      "Whether we’re considering traffic patterns, dining room furnishings or storage spaces, our focus is always making your home a simultaneously practical and beautiful place to live. We are experts at turning a multitude of design complexities into simple outcomes that both you and your home will love.",
    ],
  },
  owners: [
    {
      image: <StaticImage src="../../assets/aboutUs/owner.png" />,
      name: "Brandi Hagen",
      role: "Principal Designer / Owner",
      profilePageLink: "brandiHagen",
    },
    {
      image: <StaticImage src="../../assets/aboutUs/katie.png" />,
      name: "Katie Ruhberg",
      role: "Senior Designer",
      profilePageLink: "katieRuhberg",
    },
  ],
  teamMembers1: [
    {
      image: <StaticImage src="../../assets/aboutUs/1.png" />,
      name: "Allison Michel",
      role: "Design Associate",
    },
    {
      image: <StaticImage src="../../assets/aboutUs/2.png" />,
      name: "Jill Walbridge",
      role: "Design Associate",
    },
    {
      image: <StaticImage src="../../assets/aboutUs/3.png" />,
      name: "Tara Slater",
      role: "Design Associate",
    },
  ],
  teamMembers2: [
    {
      image: <StaticImage src="../../assets/aboutUs/4.png" />,
      name: "Marie Brown",
      role: "Design Associate",
    },
    {
      image: <StaticImage src="../../assets/aboutUs/5.png" />,
      name: "Jeremy Hagen",
      role: "Business Manager",
    },
    {
      image: <StaticImage src="../../assets/aboutUs/6.png" />,
      name: "Summit",
      role: "Textile Expert",
    },
  ],
}

const AboutUs = () => {
  return (
    <Layout>
      <Head title="About Us" />
      <div className="about-us-hero-container">
        <div className="about-us-head-small">EMINENT INTERIOR DESIGN</div>
        <div className="about-us-head au-head-1">BRING</div>
        <div className="about-us-head au-head-2">YOUR VISION</div>
        <div className="about-us-head au-head-3">TO LIFE</div>
        <div className="about-us-head-2">About</div>
        <div className="about-us-hero-container-2">
          <div className="about-us-hero-image">
            <StaticImage src="../../assets/aboutUs/hero1.png" />
          </div>
          <div className="about-us-hero-content">
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
            <div>
              {data.heroContent.map(content => (
                <div className="about-us-hero-content-quote">{content}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission-head">OUR MISSION</div>
      <div className="our-mission-container">
        <div className="our-mission-content">
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
            <div className="credit-title">
              We believe in two things above all:
            </div>
          </div>
          <ul>
            {data.ourMissionContent.believeList.map(thing => (
              <li>{`${thing.title} - ${thing.body}`}</li>
            ))}
          </ul>
          {data.ourMissionContent.quote.map(thing => (
            <div className="our-mission-quote">{thing}</div>
          ))}
        </div>
        <div className="our-mission-image">
          <StaticImage src="../../assets/aboutUs/hero2.png" />
        </div>
      </div>
      <div className="our-mission-head our-team-head">OUR TEAM</div>
      <div className="our-team-head-2">Meeting</div>
      <div className="our-team-owners-container">
        {data.owners.map(owner => (
          <Link
            to={`/aboutUs/${owner.profilePageLink}`}
            className="our-team-owner our-team-owner-link"
          >
            <div className="our-team-owner-image">{owner.image}</div>
            <div className="our-team-owner-name">
              {owner.name.toUpperCase()}
            </div>
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
              <div className="credit-title">{owner.role}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="about-us-team-members-container">
        <div className="about-us-team-members-inside-container">
          {data.teamMembers1.map(member => (
            <div className="our-team-owner">
              <div className="our-team-owner-image">{member.image}</div>
              <div className="our-team-owner-name">
                {member.name.toUpperCase()}
              </div>
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
                <div className="credit-title">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about-us-team-members-container">
        <div className="about-us-team-members-inside-container">
          {data.teamMembers2.map(member => (
            <div className="our-team-owner">
              <div className="our-team-owner-image">{member.image}</div>
              <div className="our-team-owner-name">
                {member.name.toUpperCase()}
              </div>
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
                <div className="credit-title">{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="page-bottom-padding"></div>
    </Layout>
  )
}

export default AboutUs
