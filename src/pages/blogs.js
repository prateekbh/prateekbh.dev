import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, StaticQuery } from "gatsby"

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log({ posts })
  return (
    <Layout>
      <SEO title="Blogs" />
      <h1>All the blogs</h1>
      {posts.map(({ node }) => {
        const { excerpt, id } = node;
        const {frontmatter: {date, title}} = node;
        return (
          <Link to={`/blog/${id}`} key={id}>
            <div>
              <h2>- {title}</h2>
              <span>{date}</span>
            </div>
          </Link>
        );
      })}
    </Layout>
  )
}

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                date
                title
              }
              excerpt(pruneLength: 400)
              id
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
)
