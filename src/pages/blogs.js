import React, {useEffect} from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Blogs" />
      <h1>All the blogs</h1>
    </Layout>
  );
}

export default IndexPage
