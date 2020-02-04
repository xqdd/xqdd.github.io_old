import IndexLayout from "gatsby-theme-casper/src/layouts"
import Wrapper from "gatsby-theme-casper/src/components/Wrapper"
import SiteNav from "gatsby-theme-casper/src/components/header/SiteNav"
import { SiteHeader, outer, inner, SiteMain } from "gatsby-theme-casper/src/styles/shared"
import * as React from "react"
import { css } from "@emotion/core"

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from "gatsby-theme-casper/src/templates/post"
import { PostFullContent } from "gatsby-theme-casper/src/components/PostContent"
import Footer from "gatsby-theme-casper/src/components/Footer"
import Helmet from "react-helmet"

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                构思中...
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
)

export default About
