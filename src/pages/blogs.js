import React from "react"
import Link from 'next/link';
import './app.css';
import Layout from '../layouts/main';
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import {getMetadata, getPreviewText} from '../utils/blog-content';

import style from './blogs.module.css';


const allBlogs = gql`query {
  search(last:100, type: REPOSITORY, query: "prateekbh.dev") {
    edges {
      node {
        ... on Repository {
          object(expression: "master:_posts/blog") {
            ... on Tree {
              entries {
                oid,
                object {
                  ... on Blob {
                    isTruncated,
                    text
                  }
                }

              }
            }
          }
        }
      }
    }
  }
}`;

const IndexPage = () => (
  <Layout>
    <Query query={allBlogs}>
      {({ loading, error, data: {search: {edges}} }) => {
        if (!data) {
          return (<div></div>);
        }
        const [{node: {object: {entries}}}] = edges;
        return (
          entries.map(({object: {text}, oid}) => {
            const {title, thumbnail} = getMetadata(text);
            const previewData = getMetadata(text);
            return (
              <Link key={oid} href={`/blog/${oid}`} >
                <a className={style.blogLink}>
                  <div className={style.blogDetails}>
                    <div>{title}</div>
                    <div className={style.blogPreview}>{getPreviewText(text)}</div>
                  </div>

                  <div className={style.blogThumbnail} style={{
                    backgroundImage: `url(https://raw.githubusercontent.com/prateekbh/prateekbh.dev/master${thumbnail})`,
                  }}/>
                </a>
              </Link>
            )
          })
        );
      }}
    </Query>
  </Layout>
)

export default IndexPage
