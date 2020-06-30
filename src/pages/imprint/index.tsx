import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import Container from 'common/src/components/UI/Container';
import Heading from 'reusecore/src/elements/Heading';

export default class ImprintPage extends Page {

  render() {

    return (
      <DefaultPageLayout pageTitle="Imprint">
        <Container>
          <Heading as="h2" content="Imprint"/>
          <p><strong>Address:</strong></p>
          <p>
            WorldBrain UG (haftungsbeschränkt)<br/>
            Glogauerstrasse 21<br/>
            D-10999 Berlin<br/>
          </p>
          <p><strong>Contacts:</strong></p>
          <p>
            Mail: info@worldbrain.io<br/>
            Web: http://www.worldbrain.io<br/>
            Twitter: @worldbrain<br/>
          </p>
          <p><strong>Registered:</strong></p>
          <p>Amtsgericht Berlin</p>
          <p><strong>Registration Number:</strong></p>
          <p>HRB 182851 B</p>
          <p><strong>Management &amp; Responsibility:</strong></p>
          <p>Oliver Sauter</p>
        </Container>
      </DefaultPageLayout>
    )
  }
}