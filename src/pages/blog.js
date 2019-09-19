import React from 'react'
import Layout from '../components/Layout/Layout'
import styles from '../scss/blog.module.scss'

const Blog = () => {
  return (
    <Layout>
      <h1 className={styles.title}>Blog Page</h1>
      <p>This is the blog page</p>
    </Layout>
  )
}

export default Blog
