import styled from "styled-components"

const SectionTop = styled.section`
  margin-top: 130px;
`
const Underline = styled.span`
  text-decoration: underline;
`
const UnderlineNone = styled.a`
  text-decoration: none;
`
const Link = styled.a`
  background-color: #fbfcfd;
`
const Bold = styled.span`
  font-weight: bold;
`
const WorkInProgress = styled.span`
  background-color: #5cd9a6;
  color: white;
  border-radius: 3px;
  padding: 0.2em 0.5em;
  font-size: 14px; 
  font-weight: 600;
  margin-left: 5px;
`
const PricingMarginTop = styled.div`
  margin-top: 80px;
`
const PricingContainer = styled.div`
  padding: 120px 0 0 0;
`
const FontFamily = styled.span`
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif;
`
const InterFont = styled.span`
  font-family: Inter;
`
const FooterSocialLink = styled.a`
  box-shadow: none;
  margin-right: 20px;
`

export { SectionTop, Underline, UnderlineNone, Link, Bold, WorkInProgress, PricingMarginTop, PricingContainer,
	FontFamily, InterFont, FooterSocialLink
};