import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button } from '../components/button'

export default () => (
  <Layout>
    <h1 className="title">This is the title</h1>
    Hello Alex!
    <div className="container-fluid main-container ">
      <div className="row row-black">
        <div className="col-md-4 ">
          <div className="component component-center white-background">
            <h2>Wow</h2>
            <p>That is soo cool</p>
            <Button>Click Me</Button>
          </div>
        </div>
        <div className="col-md-4">
          <div className="component component-center white-background">
            <h2>My Name is Joe</h2>
            <p>I work in a button factory</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="component component-center white-background">
            <h2>LA</h2>
            <p>The place of ANgles</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)
