import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import { Greeter } from './greeter'

export default class HomePage extends Page {
  render() {
    return (
      <DefaultPageLayout pageTitle="Home">
        <div>
          Memex home page.
          <Greeter services={this.getServices()} />
        </div>
      </DefaultPageLayout>
    )
  }
}
