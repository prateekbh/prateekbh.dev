import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Profile from "../components/profile";

import './app.css';
import style from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Profile about={
      <section>
        <p className={style.details}>
          Hi! I am a front end engineer at Google working for the <a className={style.textLink} href='https://amp.dev/'>AMP/⚡️</a> project. At work I build UI components and Service worker libraries that provides its user a delightful base to build their modern web app upon. I am also a Preact core team member where I work on the <a className={style.textLink} href='https://github.com/preactjs/preact-cli'>preact-cli</a> building a meta framework for preact's users.
        </p>

        <p className={style.details}>
          Before AMP, I worked with <a className={style.textLink} href='https://flipkart.com'>Flipkart</a> as a Senior UI engineer for their mobile web apps. Prior to Flipkart I worked briefly with <a className={style.textLink}href='https://fab.com'>Fab.com</a> for their e-commerce web app.
        </p>

        <p className={style.details}>
          I also do bunch of other open source projects which you can find on my <a className={style.textLink} href='https://github.com/prateekbh'>Github page</a>. I <Link className={style.textLink} to="/talks">speak</Link> at some conferences every year about the cool OSS things that people might be interested in hearing.
        </p>
      </section>
    }/>
  </Layout>
)

export default IndexPage
