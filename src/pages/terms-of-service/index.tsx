import React from 'react'
import DefaultPageLayout from '../../components/layout/default-page-layout'
import Page from '../../components/page'
import Container from 'common/src/components/UI/Container';
import Heading from 'reusecore/src/elements/Heading';

export default class TermsPage extends Page {
  render() {

    return (
      <DefaultPageLayout pageTitle="Login">
        <Container>
          <Heading as="h2" content="Terms and Conditions"/>
          <Heading as="h4" content="§1 General Terms"/>
          <p>By using worldbrain.io, Memex and any service/product offered by WorldBrain.io, you agree to the terms below.</p>
          <p><strong>Hi, we’re WorldBrain.io and welcome you! We’re happy to have you here and we hope you enjoy your stay. When we say ‘we’, ‘us’, ‘WorldBrain’ or ‘WorldBrain.io’ we refer to the collective members of the worldbrain.io team and the worldbrain.io/memex communities of contributors and users.</strong></p> 
          <ol>
            <li>WorldBrain’s current and future ecosystem of digital tools and communities aims to facilitate meaningful, respectful, inclusive and enriching software development and knowledge-exchange between diverse people around the world. When you join our communities on Slack & GitHub, or create an account on worldbrain.io, you accept these terms.</li>
            <li>During your time with us you agree to follow the ground rules outlined in these terms so please read and understand them. If you don’t accept the terms then we’ll be sad, but you will need to leave because your presence on and use of the WorldBrain.io sites is conditional on your acceptance to be bound by these terms.</li>
            <li>If through any reason (e.g. malfunction or loophole) the enforcement of these terms is not possible or failing, we reserve the right to enforce those terms in retrospect.</li>
          </ol> 

          <Heading as="h4" content="§2 Contributor &amp; User Communities"/>
          <ol>
            <li>With our communites on Slack &amp;GitHub we strive to facilitate meaningful, respectful, inclusive and enriching software development and knowledge-exchange between diverse people around the world. More information you can find in our code of conduct.</li>
            <li>We are dedicated to providing a harassment-free learning experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, religion. We do not tolerate harassment of participants in any form.</li>
            <li>Like in any community, we expect emotional and heated discussions to eventually happen and ask all participants to try to keep those discussions civil and respectful, regardless of the degree of disagreement.</li>
            <li>If you see potentially harmful behaviour by others, first approach the respective person in private, before attempting to call this out in public.</li>
            <li>Keep in mind: Unchecked assumptions about a person’s intentions is the root of all derailed discourse. Ask first, then make your judgement, and try to be mindful about the fact that most people don’t have bad intentions. Talk to the good person.</li>
          </ol>

          <Heading as="h4" content="§3 Premium upgrades, Crowdfunding and Rewards"/>
          <ol>
            <li>When participating in a crowdfunding initiative, you receive your rewards in the form of Memex Credits . Those are an internal currency (not blockchain tokens) and cannot be paid out in fiat currency. They can solely be used to pay for premium upgrades, instead of fiat currency.</li>
            <li>When participating in a crowdfunding initiative Memex Credits you earn as a reward cannot be used to participate in other crowdfunding initiatives.</li>
            <li>Software development is unpredictable and it may take some time until features become available that you have been funding. Either way you’ll receive your Memex Credits reward 6 months after your initial contribution.</li>
          </ol>

          <Heading as="h4" content="§5 Refunds"/>
          <ol>
            <li>We offer a 30-day money-back guarantee on any premium upgrades. Crowdfunding initiatives are excluded from this. Refunds may take up to 14 days to be processed.</li>
            <li>Refunds on crowdfunded projects are generally not possible. Once you spend money on such a project you agree to these terms and that your funds are locked in until your reward is paid out in Memex Credits.</li>
            <li>In case we fail to deliver the project you backed, or do not deliver a usable feature after 6 months, you will get your reward nevertheless. No cash refund is possible.</li>
            <li>Potential payment fees we can’t get refunded from the payment provider (e.g. Paypal or Stripe) are not refundable.</li>
          </ol>

          <Heading as="h4" content="§6 Privacy"/>
          <p>We highly value your privacy and data ownership. It’s at the core of our DNA and vision for the world. Here is a full privacy policy.</p>

          <ol>
            <li>If not otherwise possible to provide the relevant services, all data stays on your computer/phone.</li>
            <li>If we need to store personal data on our servers to provide services current or future services, at no point do we analyse, share or sell it (and any derivative work) without explicit consent.</li>
            <li>We do run anonymised analysis on usage behaviour in order to improve the user experience of Memex. No personal information, like urls you visit, annotations or tags you make are part of this. At any time, you can opt-out of the anonymised behaviour analysis via Memex’ settings, and we do respect the “do not track” requests of your browser.</li>
          </ol>

          <Heading as="h4"content="§7 Other Terms"/>
          <ol>
            <li>Links To Other Web Sites: Our Service may contain links to third-party web sites or services that are not owned or controlled by WorldBrain.io. WorldBrain.io has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that WorldBrain.io shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.</li>
            <li>Changes: We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What constitutes a material change will be determined at our sole discretion.</li>
            <li>Contact Us: If you have any questions about these Terms, please contact us: info@worldbrain.io</li>
          </ol>
        </Container>
      </DefaultPageLayout>
    )
  }
}
