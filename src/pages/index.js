import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './app.css';
import style from './index.module.css';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <h1 className={style.name}>Prateek Bhatnagar</h1>
      <div className={style.phoenatics}>[Pratëëk - Bhätnägär]</div>
    </div>
  </Layout>
)

export default IndexPage
