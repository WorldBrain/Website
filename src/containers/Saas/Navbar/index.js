import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarWrapper from 'reusecore/src/elements/Navbar';
import Drawer from 'reusecore/src/elements/Drawer';
import Logo from 'reusecore/src/elements/UI/Logo';
import Box from 'reusecore/src/elements/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import LogoImage from '../../../img/logos/logo-memex.svg';

const Navbar = ({ navbarStyle, logoStyle, row, menuWrapper, user }) => {
  const Data = useStaticQuery(graphql`
    query {
      saasJson {
        MENU_ITEMS {
          label
          path
          offset
          staticLink
        }
      }
    }
  `);

  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Logo
            href="/"
            logoSrc={LogoImage}
            title="Memex"
            logoStyle={logoStyle}
          />
          <Box {...menuWrapper}>
            <ScrollSpyMenu
              className="main_menu"
              menuItems={Data.saasJson.MENU_ITEMS}
              offset={-70}
              user={user}
            />
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#5CD9A6" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ScrollSpyMenu
                className="mobile_menu"
                menuItems={Data.saasJson.MENU_ITEMS}
                drawerClose={true}
                offset={-100}
                user={user}
              />
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    display: 'block',
  },
  row: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: [
      'space-between',
      'space-between',
      'space-between',
      'space-between',
    ],
    width: '100%',
  },
  logoStyle: {
    maxWidth: '130px',
    mr: [0, 0, 0, '120px'],
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
