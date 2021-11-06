import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import Container from 'common/src/components/UI/Container';
import Link from 'reusecore/src/elements/Link';
import Box from 'reusecore/src/elements/Box';
import Heading from 'reusecore/src/elements/Heading';
import Image from 'reusecore/src/elements/Image';
import {SubText, Header2, MainHeader} from './tutorials.style';
import EuComissionLogo from '../../img/logos/logo-eu.png';
import LedgerLogo from '../../img/logos/logo-ledger.png';
import DigitalScienceLogo from '../../img/logos/logo-digitalscience.png';
import MozillaLogo from '../../img/logos/logo-mozilla.svg';
import styled from 'styled-components';


const NotionFrame = styled.iframe`
    width: 100%;
    height: 10000px;
    overflow-y: none;
    margin-top: -100px;
    border: none; 
`

export default class TutorialsPage extends Page {

  render() {
    return (
      <DefaultPageLayout pageTitle="Tutorials">
        <NotionFrame allow="clipboard-read; clipboard-write" src="https://tutorials.memex.social/"/>
        {/*<Container>

          <MainHeader>Wall of Thanks 🙏 🎉 ⭐️</MainHeader>
          <Header2>Code Contributors</Header2>
              <SubText>Memex and StorexHub would not be possible without our contributors. Visit us on <a href="https://github.com/worldbrain" target="_blank">GitHub</a>.</SubText>
              <Link href="https://github.com/worldbrain/memex/graphs/contributors" target="_blank"><Image src="https://opencollective.com/worldbrain/contributors.svg?width=900"></Image></Link>
          <Header2>Financial Contributors</Header2>
          <SubText>It's users like you who help making this dream a reality. This project is for and by the people. <a href="https://medium.com/@WorldBrain/vision-mission-values-2020-update-d70aa35a638">Read More</a></SubText>
          <Link href="https://opencollective.com/worldbrain#section-contributors" target="_blank"><Image src="https://opencollective.com/worldbrain/individuals.svg?width=900"></Image></Link>
          <Header2>Investors</Header2>
          <SubText>We don't sell shares or take Venture Capital. {'\n'} {"\n"}These organisations and <Link href="https://www.notion.so/worldbrain/The-Worldbrain-io-Team-9ca5429f6a5c480289386a5cb49f173c#480df7140d124dc68595316dd666fd9a" target="_blank">individuals</Link> contributed with significant financial investment. <a href="https://community.worldbrain.io/t/why-worldbrain-io-does-not-take-venture-capital/75">Read More</a></SubText>
          <Box>
            <Link href="https://ec.europa.eu" target="_blank">
              <Image height="50px" src={EuComissionLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
            </Link>
            <Link href="https://ledgerproject.eu" target="_blank">
              <Image height="50px" src={LedgerLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
            </Link>
            <Link href="https://foundation.mozilla.org/en" target="_blank">
              <Image height="50px" src={MozillaLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
            </Link>
            <Link href="https://www.digital-science.com" target="_blank">
              <Image height="50px" src={DigitalScienceLogo} className="banner-img" alt="A gif showing someone highlight content and add a note to it" />
            </Link>
          </Box>
        </Container>*/}  
      </DefaultPageLayout>
    )
  }
}