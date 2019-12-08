import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import Heading from '../../../reusecore/src/elements/Heading';
import ContainerWrapper from './404.style';

export default class NotFoundPage extends Page {
  render() {
    return (
      <DefaultPageLayout pageTitle="Page not found">
        <ContainerWrapper>
        <Heading as="h2" content="Page not found"/>
          <p>We went looking everywhere, but couldn't find the page you're looking
          for...</p>
        </ContainerWrapper>
      </DefaultPageLayout>
    )
  }
}
