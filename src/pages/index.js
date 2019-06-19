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
    <Profile/>
  </Layout>
)

export default IndexPage
