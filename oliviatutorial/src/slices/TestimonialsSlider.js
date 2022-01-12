// import * as React from 'react'
// import { graphql } from 'gatsby'

// export const TestimonialsSlider = ({ slice }) => {
//   return (
//     <section className="testimonials-slider content-section">
//       <p> {slice.primary.button_label} </p>
//       <button> {slice.primary.button_link.url} </button>
//       <p> {slice.primary.eyebrow_headline.text} </p>
//       <p> {slice.primary.paragraph.text} </p>
//       <p> {slice.primary.title.text} </p>
//       <img src={slice.primary.image.url} alt={slice.primary.image.alt} />
//       <p> {slice.person.testimonial.text}</p>
//     </section>
//   )
// }

// export const query = graphql`
//   fragment PageDataBodyTestimonialsSlider on PrismicPageDataBodyTestimonialsSlider {
//     items {
//       image {
//         url
//       }
//       person
//       testimonial {
//         text
//       }
//       title
//     }
//     primary {
//       button_label
//       button_link {
//         url
//       }
//       eyebrow_headline {
//         text
//       }
//       paragraph {
//         text
//       }
//       title {
//         text
//       }
//     }
//   }
// `
