import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    asdf great
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <div className="container">
      <div className="row">
        <div className="col-sm-3">column-001</div>
        <div className="col-sm-3">column-002</div>
        <div className="col-sm-3">column-003</div>
        <div className="col-sm-3">column-004</div>
      </div>
    </div>
  </div>
)

export default IndexPage
