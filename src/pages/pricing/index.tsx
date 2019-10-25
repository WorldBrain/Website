import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'

const STYLES = require('./styles.module.css')

export default class NotFoundPage extends Page {
  render() {
    return (
      <DefaultPageLayout pageTitle="Pricing">
        <p>Memex pricing page</p>
      </DefaultPageLayout>
    )
  }
}
