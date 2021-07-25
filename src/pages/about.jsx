import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || `Title`

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="About Page" />
            <Bio />
            Hello word from About page
        </Layout>
    )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
