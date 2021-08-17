import React, { useState } from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import { TextField, InputAdornment } from "@material-ui/core"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles"

import Head from "../components/head"
import Layout from "../components/layout"
import Icon from "../assets/Icons"
import "./gallery.css"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}))

const Gallery = () => {
  const [pagePagNum, setPagePagNum] = useState([1, 2, 3])
  const [currentPagIndex, setCurrPagIndex] = useState(0)

  const handleDecPagination = () => {
    if (pagePagNum[0] > 1) {
      setPagePagNum([pagePagNum[0] - 1, pagePagNum[0], pagePagNum[1]])
      window.scrollTo(0, 0)
    }
  }

  const handleIncPagination = () => {
    if (pagePagNum[2] < Math.floor(galleryImages.length / 7) + 1) {
      setPagePagNum([pagePagNum[1], pagePagNum[2], pagePagNum[2] + 1])
      window.scrollTo(0, 0)
    }
  }

  const classes = useStyles()

  const galleryImages = useStaticQuery(graphql`
    query {
      allPrismicGallery {
        edges {
          node {
            data {
              images {
                image {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `).allPrismicGallery.edges[0].node.data.images

  return (
    <Layout>
      <Head title="Gallery" />
      <div className="gallery-margin-top"></div>
      <div>
        <div className="about-us-head brandi-head">PHOTO</div>
        <div className="about-us-head au-head-3">GALLERY</div>
        <div className="about-us-head-2">Projects</div>
      </div>
      <div className={classes.root}>
        <div className="filtering-inputs">
          <Autocomplete
            multiple
            id="tags-outlined"
            className="gallery-search-bar"
            options={top100Films}
            getOptionLabel={option => option.title}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Search by tag..."
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon name="search" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-outlined"
            className="gallery-category-input"
            options={top100Films}
            getOptionLabel={option => option.title}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Category"
              />
            )}
          />
          <Autocomplete
            multiple
            id="tags-outlined"
            className="gallery-sorting-input"
            options={top100Films}
            getOptionLabel={option => option.title}
            filterSelectedOptions
            renderInput={params => (
              <TextField
                {...params}
                variant="outlined"
                placeholder="Sorting"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon name="sorting" />
                    </InputAdornment>
                  ),
                }}
              />
            )}
          />
        </div>
      </div>
      <div className="filtering-inputs-mobile">
        <Icon name="filter" />
        <Icon name="sorting" />
      </div>
      <div
        style={{ width: "90%", height: 1, backgroundColor: "#f3f3f3" }}
      ></div>
      <div className="gallery-image-grid">
        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7] && (
          <div className="gallery-image-container w-3">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7].image
                      .gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 1] && (
          <div className="gallery-image-container w-3">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 1]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 2] && (
          <div className="gallery-image-container w-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 2]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 3] && (
          <div className="gallery-image-container w-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 3]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 4] && (
          <div className="gallery-image-container w-2">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 4]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 5] && (
          <div className="gallery-image-container w-3">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 5]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}

        {galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 6] && (
          <div className="gallery-image-container w-3">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage
                  image={getImage(
                    galleryImages[(pagePagNum[currentPagIndex] - 1) * 7 + 6]
                      .image.gatsbyImageData
                  )}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="gallery-image-grid-mobile">
        {galleryImages.map(img => (
          <div className="gallery-image-container w-3">
            <div className="gallery-item">
              <div className="gallery-image">
                <GatsbyImage image={getImage(img.image.gatsbyImageData)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-component">
        {pagePagNum[0] > 1 && (
          <div
            className="pagination-prev-button"
            onClick={handleDecPagination}
            role="button"
            tabIndex={0}
            onKeyUp={handleDecPagination}
          >
            <Icon name="arrowLeft" size="12" color="#34342E" />
            <div className="pagination-text pag-prev-text">Prev</div>
          </div>
        )}
        <div
          style={{
            color: currentPagIndex === 0 ? "#c19a5b" : "#34342E",
            opacity: currentPagIndex === 0 ? 1 : 0.5,
          }}
          className="pagination-text"
          onClick={() => {
            setCurrPagIndex(0)
            window.scrollTo(0, 0)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => setCurrPagIndex(0)}
        >
          {pagePagNum[0]}
        </div>
        <div
          style={{
            color: currentPagIndex === 1 ? "#c19a5b" : "#34342E",
            opacity: currentPagIndex === 1 ? 1 : 0.5,
          }}
          className="pagination-text"
          onClick={() => {
            setCurrPagIndex(1)
            window.scrollTo(0, 0)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => setCurrPagIndex(1)}
        >
          {pagePagNum[1]}
        </div>
        <div
          style={{
            color: currentPagIndex === 2 ? "#c19a5b" : "#34342E",
            opacity: currentPagIndex === 2 ? 1 : 0.5,
          }}
          className="pagination-text"
          onClick={() => {
            setCurrPagIndex(2)
            window.scrollTo(0, 0)
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => setCurrPagIndex(2)}
        >
          {pagePagNum[2]}
        </div>
        {pagePagNum[2] < Math.floor(galleryImages.length / 7) + 1 && (
          <div
            className="pagination-prev-button"
            onClick={handleIncPagination}
            role="button"
            tabIndex={0}
            onKeyDown={handleIncPagination}
          >
            <div className="pagination-text pag-next-text">Next</div>
            <Icon name="arrowRight" size="12" color="#34342E" />
          </div>
        )}
      </div>
    </Layout>
  )
}

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
]

export default Gallery
