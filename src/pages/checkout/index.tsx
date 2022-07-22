import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import styled from 'styled-components';
import PricingPage from '../../containers/Saas/PricingSection/PricingPage';


const PricingPageBox = styled.div`
  margin-top: 50px;
  justify-self: center;
`

const PricingPageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

export default class TutorialsPage extends Page {

  render() {
    return (
      <DefaultPageLayout pageTitle="Checkout">
        <PricingPageContainer>
          <PricingPageBox>
            <PricingPage />

          </PricingPageBox>
        </PricingPageContainer>
      </DefaultPageLayout>
    )
  }
}