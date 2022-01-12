import * as React from 'react'
import { graphql } from 'gatsby'
import { SliceZone } from '@prismicio/react'
import { withPrismicPreview } from 'gatsby-plugin-prismic-previews'

import { Layout } from '../components/Layout'
import { Seo } from '../components/Seo'
import { HomepageBanner } from '../components/HomepageBanner'

import { components } from '../slices'

const PageTemplate = ({ data }) => {
  if (!data) return null
  const doc = data.prismicPage.data

  return (
    <Layout>
      <Seo title={doc.document_display_name.text} />
      <HomepageBanner
        title={doc.banner_title.text}
        description={doc.banner_description.text}
        linkUrl={doc.banner_link.url}
        linkLabel={doc.banner_link_label.text}
        backgroundUrl={doc.banner_background.url}
      />
      <SliceZone slices={doc.body} components={components} />
    </Layout>
  )
}

export const query = graphql`
  query PageQuery($id: String) {
    prismicPage(id: { eq: $id }) {
      _previewable
      data {
        document_display_name {
          text
        }
        banner_title {
          text
        }
        banner_description {
          text
        }
        banner_link {
          url
          type
          uid
        }
        banner_link_label {
          text
        }
        banner_background {
          url
        }
        body {
          ... on PrismicSliceType {
            slice_type
          }
          ...PageDataBodyText
          ...PageDataBodyQuote
          ...PageDataBodyFullWidthImage
          ...PageDataBodyImageGallery
          ...PageDataBodyImageHighlight
        }
      }
    }
  }
`

export default withPrismicPreview(PageTemplate)
