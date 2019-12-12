import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Logo from 'reusecore/src/elements/UI/Logo';
import Container from 'common/src/components/UI/Container';
import FooterWrapper, { List, ListItem, FooterLink } from './footer.style';
import LogoWorldbrain from '../../../img/logos/logo-worldbrain.svg';
import SubscribeForm from '../../../components/subscribe-form';
import Link from 'reusecore/src/elements/Link';

const Footer = ({
  row,
  col,
  colTwo,
  titleStyle,
  endlink,
  logoStyle,
}) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        Footer_Data {
          title
          menuItems {
            text
            url
          }
        }
      }
    }
  `);

  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="row" {...row}>
          <Box {...colTwo}>
            {Data.saasJson.Footer_Data.map((widget, index) => (
              <Box className="col" {...col} key={`footer-widget-${index}`}>
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item, index) => (
                    <ListItem key={`footer-list-item-${index}`}>
                      <a href={item.url} className="ListItem">
                        {item.text}
                      </a>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}

            <Box className="col subscribe" {...col}>
              <Heading content="Stay up to date!" {...titleStyle} />
              <p>Get a monthly updates on our progress and a reading list of our team.</p>
              <SubscribeForm />
            </Box>
          </Box>
          {/* End of footer List column */}
        </Box>

        <Box className="row support-links" {...endlink}>
          <Logo
            logoSrc={LogoWorldbrain}
            logoStyle={logoStyle}
            title="Memex"
          />
          <Link href="https://community.worldbrain.io/">
            support@worldbrain.io
          </Link>
          <Link href="https://community.worldbrain.io/c/bug-reports">
            Report a bug
          </Link>
          <Link href="https://www.flaticon.com/authors/smashicons">
            Icons by <u>Smashicons</u> from <u>Flaticons.com</u>
          </Link>
        </Box>
      </Container>
      
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col two style
  colTwo: {
    width: ['100%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['50%', '50%', '33%', '33%'],
    pl: '15px',
    pr: '15px',
    mb: '30px',
  },
  // widget title default style
  titleStyle: {
    color: 'footerColor',
    fontSize: '1rem',
    fontWeight: '700',
  },
  endlink: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  // Default logo size
  logoStyle: {
    width: ['200px', '250px', '190px', '250px'],
  },
  // widget text default style
  textStyle: {
    color: 'footerColor',
    fontSize: '44px',
    mb: '10px',
  },
};

export default Footer;
