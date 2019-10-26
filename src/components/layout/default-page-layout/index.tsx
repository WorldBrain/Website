import React from 'react'

import Header from '../header';
import Footer from '../footer';

import './styles.scss';

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
        {this.props.children}
        <Footer />
      </React.Fragment>
    )
  }
}
