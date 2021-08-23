import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"

const NotFound = () => {
  return (
    <Layout>
      <Head title="Not Found" />
      <div className="gallery-margin-top"></div>
      <div>
        <div className="about-us-head brandi-head">PAGE NOT</div>
        <div className="about-us-head au-head-3">FOUND</div>
        <div className="about-us-head-2">Error 404</div>
      </div>
      <div className="gallery-margin-top"></div>
    </Layout>
  )
}

export default NotFound
