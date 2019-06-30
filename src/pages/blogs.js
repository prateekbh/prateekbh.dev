import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql, StaticQuery } from "gatsby"
import style from './blogs.module.css';

const BlogRoll = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log({ posts })
  return (
    <Layout>
      <SEO title="Blogs" />
      <h1 className={style.title}>All the blogs</h1>
      <ul className={style.blogs}>
      {posts.map(({ node }) => {
        const { excerpt, id } = node;
        const {frontmatter: {date, title}} = node;
        return (
          <li className={style.blog}>
            <Link to={`/blog/${id}`} key={id}>
              <h2 className={style.blogTitle}>{title}</h2>
              <div>{date}</div>
              <div className={style.blogText}>{excerpt}</div>
            </Link>
          </li>
        );
      })}
      </ul>
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
