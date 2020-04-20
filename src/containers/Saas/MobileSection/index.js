import React from 'react';
import PropTypes from 'prop-types';
import Zoom from 'react-reveal/Zoom';
import Box from 'reusecore/src/elements/Box';
import Text from 'reusecore/src/elements/Text';
import Heading from 'reusecore/src/elements/Heading';
import Card from 'reusecore/src/elements/Card';
import Image from 'reusecore/src/elements/Image';
import Link from 'reusecore/src/elements/Link';
import FeatureBlock from 'common/src/components/FeatureBlock';
import Container from 'common/src/components/UI/Container';
import MobileSectionWrapper, { SectionObject, View, DownloadButtons, BetaPill} from './mobile.style';
import MobileSync from '../../../img/mobileSync.png';
import DownloadAndroid from '../../../img/googlePlay.png';
import DownloadiOS from '../../../img/appStore.png';
import ImageBg from 'common/src/assets/image/saas/banner/bannerObject1.png';

const MobileSection = ({
  title,
  description,
  textArea,
  imageWrapper,
  sectionWrapper,
}) => {
  return (
    <MobileSectionWrapper id="deviceSection">
          <View {...sectionWrapper} className="sectionBox">
              <Box {...textArea}>
                <BetaPill>
                  Beta
                </BetaPill>
                <FeatureBlock
                  title={
                    <Heading
                      content="Quickly save & organise content on the go"
                      {...title}
                    />
                  }
                  description={
                    <Text
                      content="Encrypted sync between your computer, iOS & Android devices."
                      {...description}
                    />
                  }
                />

                <DownloadButtons>
                  <Link href="https://apps.apple.com/app/id1471860331" target="_blank"><Image src={DownloadiOS} className="mobileDownload" alt="Download iOS" /></Link>
                  <Link href="https://play.google.com/store/apps/details?id=io.worldbrain" target="_blank"><Image src={DownloadAndroid} className="mobileDownload" alt="Download Android" /></Link>
                </DownloadButtons>
              </Box>
            <SectionObject>
              <Card className="objectWrapper" {...imageWrapper}>
                  <Image src={MobileSync} className="mobile-img" alt="Two screens showing saving tags on mobile" />
              </Card>
            </SectionObject>
          </View>
    </MobileSectionWrapper>
  );
};

MobileSection.propTypes = {
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
  textWrapper: PropTypes.object,
};

MobileSection.defaultProps = {
  textArea: {
    width: ['50%', '50%', '40%'],
    pl: [0, 0, 30],
    pr: [30, 30, 50],
  },
  sectionWrapper: {
      maxWidth: 1000,
      height: 'auto',
  },
  imageWrapper: {
    boxShadow: 'none',
    height: 'auto',
    ml: [20, 20, 20, 20],
  },
  title: {
    fontSize: ['2rem', '1.6rem', '1.5rem'],
    fontWeight: '700',
    color: 'headingColor',
    mb: '10px',
    mt: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '1.125rem',
    lineHeight: '1.5',
    color: 'textColor',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '0.875rem',
    color: '#fff',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default MobileSection;
