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
import TweetEmbed from 'react-tweet-embed'
  // TweetEmbed Option ReferencE: https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference


const NotionFrame = styled.iframe`
    width: 100%;
    height: 10000px;
    overflow-y: none;
    margin-top: -100px;
    border: none; 
`
const SectionTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`

const SubSectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding-top: 30px;
`

const TweetBox = styled.div<{width: string}>`
  width: ${(props) => props.width};
`

const ContentSection = styled.div``

const MultiTweetBox = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 20px;
`

const SingleTweet = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10px;
`

const Paragraph = styled.p``

const OuterLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const InnerLayout = styled.div`
  max-width: 800px
  justify-self: center;
  padding: 0 20px;
`

const SectionSpacer = styled.div`
  height: 50px;
`


export default class TutorialsPage extends Page {

  render() {
    return (
      <DefaultPageLayout pageTitle="Vision">
        <OuterLayout>
          <InnerLayout>
            <SectionTitle>Why we are doing this</SectionTitle>
            <ContentSection>
              <Paragraph>
                We're living in times of unprecedented information overload, which is a good and a bad thing. On the one hand we have all information in the world at our fingertips, on the other hand we have now a difficult time filtering out what's good quality, who to listen to and to compare different perspectives effectively.
                <br/>This makes the current way we consume content online a breeding ground for misinformation and social polarisations.
              </Paragraph>
              <Paragraph>
                It's a problem because in this situation we are unable to make effective, compassionate and sustainable decisions about the most impactful problems humanity faces today. It's hard to believe that we'll get out of this century alive and/or well if we don't improve society's capabilities to improve its information diet and as a result its decision-making processes.
              </Paragraph>
            </ContentSection>
            <MultiTweetBox>
              <TweetBox
                width='500px'
              >
                <TweetEmbed
                  id='1345439053076967433'
                />
              </TweetBox>
              <TweetBox
                width='600px'
              >
                <TweetEmbed
                  id='1342870786944602118'
                />
              </TweetBox>
            </MultiTweetBox>
            <SectionSpacer/>
            <SectionTitle>A collaborative way forward</SectionTitle>
            <ContentSection>
              <Paragraph>The good thing about the way the web works today is that it enabled each individual to forge their own path of knowledge, mastery and excellence.</Paragraph>
              <Paragraph>Especially the last year has shown that there are people like this in every domain and topic. A whole culture of 'Creators' has emerged and tools like Roam, Notion, Obsidian and Logseq have brought personal knowledge management, critical thinking and knowledge gardening to a mainstream audience. Twitter, if used well, can be an incredible source of knowledge and is filled with people that are the best of the best in every domain.</Paragraph>
              <Paragraph>Everyone today, if they use those tools or not, either consumes or actively researches topics of their interest and have unique insights and lenses on what they read. They make notes, save good content, sometimes share the best things on social media. Most importantly though, they filter good quality content intuitively and based on real experience, better than any algorithm will be able to do in the foreseeable future.</Paragraph>
              <Paragraph>However, sharing this knowledge is incredible time consuming. Blog posts are in depth and take a lot of effort, tweets are not nuanced enough, sharing links and retweets are not providing much value in the endless feed.</Paragraph>
              <Paragraph>In every case the knowledge we all generate is disconnected from what we are reading. You don't know who in your network of trusted people has read the article you are currently reading and what thoughts they had on it. The information is out there, in the form of bookmarks, tweets, highlights, social comments, notes or blog posts.</Paragraph>
              <Paragraph>If we were able to access this knowledge as we are researching and browsing around the web, we could build on each others knowledge. We could research topics faster, find quality information faster, understand topics deeper understanding the topic and get more perspectives to develop a more nuanced understanding of the topics at hand.</Paragraph>
            </ContentSection>
            <SectionSpacer/>
            <SectionTitle>The missing piece: Social Curation and Annotation</SectionTitle>
            <SingleTweet>
              <TweetBox
                width='550px'
              >
                <TweetEmbed
                  id='1340406185158193154'
                />
              </TweetBox>
            </SingleTweet>
            <ContentSection>
              <Paragraph>Right now, collaboratively curating and discussing content is cumbersome. There are pieces of it existing. Reddit for social curation, Google Docs or Hypothes.is for collaborative highlighting and discussing, Pocket for quickly saving interesting content, Twitter for interconnecting ideas.</Paragraph>
              <Paragraph>However, they all require a lot of copy-pasting things around constantly creating single-use information that is scattered everywhere, and never in context of your current reading experience.</Paragraph>
            </ContentSection>
            <SubSectionTitle>So, what if Twitter, Reddit, Google Docs and Pocket had a baby?</SubSectionTitle>
            <MultiTweetBox></MultiTweetBox>
            <SingleTweet></SingleTweet>
          </InnerLayout>
        </OuterLayout>
      </DefaultPageLayout>
    )
  }
}