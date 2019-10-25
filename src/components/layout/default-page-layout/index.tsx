import React from 'react'

import Header from '../header'
import Footer from '../footer'

export interface DefaultPageLayoutProps {
  pageTitle: string
  children: React.ReactNode
}

export default class DefaultPageLayout extends React.Component<
  DefaultPageLayoutProps
> {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>{this.props.pageTitle}</h1>
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}
