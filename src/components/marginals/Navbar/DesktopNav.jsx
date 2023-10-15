import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { AuthContext } from '../../../utils/Auth';
import { nav } from '../../../../config/content';
import Heading4 from '../../shared/Typography/Heading4';
import { Container } from '../../shared';
import { NavCenter, NavRight, NavSection, NavWrapper, StyledHamburger } from './styles';
import { MenuContext } from './MenuContext';
import Button from '../../shared/Button';
import NavList from './NavList';

function DesktopNav() {
  const menuContext = useContext(MenuContext);
  const authContext = useContext(AuthContext);
  const { toggleMenuOpen, menuopen } = menuContext;
  const { authenticated, login, logout } = authContext;

  return (
    <NavSection>
      <Container>
        <NavWrapper>
          <div className='navLeft'>
            <Link to='/'>
              <Heading4>{nav.logo.text}</Heading4>
            </Link>
          </div>
          <NavCenter>
            <StyledHamburger menuopen={menuopen} onClick={toggleMenuOpen} />
            <NavList />
          </NavCenter>
          <NavRight>
            <Button
              variant='outline'
              text={authenticated ? 'logout' : 'login'}
              onClick={authenticated ? logout : login}
            />
          </NavRight>
        </NavWrapper>
      </Container>
    </NavSection>
  );
}

export default DesktopNav;
