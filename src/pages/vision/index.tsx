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

const UnorderedList = styled.ul`
  margin-inline-start: 40px;
  & li {list-style-type: disc;}
`

const OrderedList = styled.ol`
  margin-inline-start: 10px;
  & li {list-style-type: numbers;}
`

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
const VideoContainer = styled.div`
  display: flex;
  width: 100%
  justify-content: center;
`
const VideoFrame = styled.iframe`
  width: 600px;
  height: 350px;
  border: none;
  margin: auto;
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
              <Paragraph>Creators, researchers, academics, students, librarians, companies & investors (and many more) either consumes or actively researches topics of their interest and have unique insights and lenses on what they read.
              <br/>They make notes, save good content, sometimes share the best things on social media. Most importantly though, they filter good quality content intuitively and based on real experience, better than any algorithm will be able to do in the foreseeable future.</Paragraph>
              <Paragraph>However, sharing this knowledge is incredible time consuming. Blog posts are in depth and take a lot of effort, tweets are not nuanced enough, sharing links and retweets are not providing much value in the endless feed as you mostly scroll past it.</Paragraph>
              <Paragraph>As a result, you don't know who in your network of trusted people has read the article you are currently reading and what thoughts they had on it. The information is out there, in the form of bookmarks, tweets, highlights, social comments, notes or blog posts.</Paragraph>
              <Paragraph>If we were able to access this knowledge as we are researching and browsing around the web, we could build on each others knowledge. We could research topics faster, find quality information faster, understand topics deeper and get more perspectives to develop a more nuanced understanding of the topics at hand.</Paragraph>
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
            <SubSectionTitle>So, what if Twitter, Reddit, Google Docs and Pocket had a baby?</SubSectionTitle>
              <Paragraph>As a tool, Memex aims to help you to organise and annotate what you find on the web and collaboratively curate, annotate and discuss this content with your peers. </Paragraph>
              <Paragraph>It takes the best parts of great tools and puts them in one:</Paragraph>
                <UnorderedList>
                  <li>Pocket's ability to quickly save and and recover content through full-text search</li>
                  <li>Reddits social curation</li>
                  <li>Google Doc's collaborative highlighting and discussing, but for the whole web</li>
                  <li>Twitter's cross-referancability, aka. 'QuoteBlocks'</li>
                </UnorderedList>
              <Paragraph>Memex' long term goal is to reduce the effects of misinformation and social polarisation. Not by making top-down decisions whats true or acceptable, but by giving people the tools to build on existing research work, efficiently compare different perspectives of the people around them and form a more nuanced understanding. That may not always be correct on the first round, but we believe it is a much more sustainable way of the way of creating shared understanding.</Paragraph>
              <VideoContainer><VideoFrame src='https://www.youtube.com/embed/PBNXY1Ud_Is'/></VideoContainer>
              </ContentSection>
              <SectionSpacer/>
            <SectionTitle>Built without Venture Capital money: Steward Owned</SectionTitle>
            <ContentSection>
              <Paragraph>Everyone has different needs for tools & workflows that need to be interconnected and interchangeable, but today, most of the tools we use have strong incentives to lock us into their services or not interoperate with the rest of the network as soon as they become big enough. </Paragraph>
              <Paragraph>Existing social tools optimise for consumption, we want to optimise for quality and diversity. We want to build tools for you to invest attention, not pay attention.</Paragraph>
              <MultiTweetBox>
              <TweetBox
                width='500px'
              >
                <TweetEmbed
                  id='1354146209032769539'
                />
              </TweetBox>
              <TweetBox
                width='600px'
              >
                <TweetEmbed
                  id='1314014474337234944'
                />
              </TweetBox>
            </MultiTweetBox>
              <Paragraph>We see the root cause of extractive business practices in the uncapped profit expectations of Venture Capital and equity based reward models. They create strong profit maximisation incentives that after a while make every company do things for profit and not people.</Paragraph>
              <Paragraph>To prevent Memex' purpose being coopted by profit-maximisation incentives, while still striving to be a profitable business, we use a model called Steward Ownership. It introduces 2 principles into the reward structure of our company:</Paragraph>
              <OrderedList>
                  <li><strong>Investor and team rewards are capped.</strong>
                    <br/>
                    Capping individual returns removes the greed for more value extraction, which usually ends up in worse services, lock-ins or social/environmental damages.
                    <br/>The key questions for every team member and investor "How much is enough for you to feel save, fairly rewarded for your efforts, have opportunities and not have to worry about money anymore?".

                  </li>
                  <li><strong>The company and its equity can never be sold.</strong>
                    <br/>This prevents the purpose of the company being coopted once the company is bought by other companies with different values and purposes, or from internal politics and pressure to sell the company afterall. 
                    <br/>Not making the equity tradeable also prevents the unstoppable value speculation process that would make it practically impossible to enforce the cap.  
                  </li>
              </OrderedList>
              <Paragraph>Because of the capped investor returns and profit payout, Memex continuously has spare profits and with that the economic freedom to do things like building more open tools, build features that only cost us money but make the tool effectively better, without lowering the total returns of investors. </Paragraph>
              <Paragraph>Ultimately we asked ourselves the question: What are the most critical values to keep that have the most impact long-term on the success of our mission, and on the other values too. </Paragraph>
              <Paragraph>We are convinced from the start that the economic incentives we set up in our company will play a crucial role in the way we run this business and protect user's privacy, build better service and stay a net-positive actor in the knowledge ecosystem. 
              <br/>That's what we have the highest importance to protect: Being non-tradeable and keeping investor returns capped. </Paragraph>
              <Paragraph>Raising money as a Steward Owned company made our fundraising efforts extremely difficult. But we made it! So far raised 250k from investors that all have their cap. It took a while and is an expensive raise, as we have to pay this money (+ a multiplier) back in cash in the future. But we think its worth it and most important for the future of Memex being an open and privacy protecting tool.</Paragraph>
              <Paragraph>Currently we give users an early bird discount where you can support us with $10 monthly or $150 one-time. Once we launch our subscriptions in early 2022, you'll get $15 in credits for each $10 you supported us with, or $360 for the $150 support.
              <br/><a href='https://links.memex.garden/announcements/pioneer-plan'>Here</a> you can find out more about how to support us.</Paragraph>
            </ContentSection>
          </InnerLayout>
        </OuterLayout>
      </DefaultPageLayout>
    )
  }
}