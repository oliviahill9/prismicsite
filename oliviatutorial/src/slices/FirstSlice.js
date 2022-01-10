import * as React from 'react'
import { graphql } from 'gatsby'

export const FirstSlice = ({ slice }) => {
  return (
    <section className="firstslice content-section">
      <img
        src={slice.primary.testsliceimage.url}
        alt={slice.primary.testsliceimage.alt}
      />
    </section>
  )
}

export const query = graphql`
  fragment HomepageDataBodyFirstSlice on PrismicHomepageDataBodyFirstslice {
    primary {
      testsliceimage {
        alt
        url
      }
    }
  }
`
