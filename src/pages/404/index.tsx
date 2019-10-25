import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'

const STYLES = require('./styles.module.css')

export default class NotFoundPage extends Page {
  render() {
    return (
      <DefaultPageLayout pageTitle="Page not found">
        <p>
          We went looking everywhere, but couldn't find the page you're looking
          for...
        </p>
      </DefaultPageLayout>
    )
  }
}
