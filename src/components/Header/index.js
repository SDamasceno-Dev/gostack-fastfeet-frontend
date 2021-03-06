/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Component Header of the App
 */

// Importing dependencies
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// Other imports
import logo from '~/assets/FastfeetHeaderLogo.svg';
import { signOut } from '~/store/modules/auth/actions';

// Import the styled used
import { Container, Content, Profile } from './styles';

export default function Header() {
  const profile = useSelector(state => state.user);
  const dispatch = useDispatch();

  // The function that leaves the system
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        {/* NavLinks */}
        <nav>
          <img src={logo} alt="FastFeet" />
          <NavLink to="/delivery" activeClassName="select">
            ENCOMENDAS
          </NavLink>
          <NavLink to="/courier" activeClassName="select">
            ENTREGADORES
          </NavLink>
          <NavLink to="/recipient" activeClassName="select">
            DESTINATÁRIOS
          </NavLink>
          <NavLink to="/deliveryproblem" activeClassName="select">
            PROBLEMAS
          </NavLink>
        </nav>
        {/* Profile data */}
        <aside>
          <Profile>
            <div>
              <strong>{profile.profileName}</strong>
              <NavLink onClick={handleSignOut} to="/">
                Sair do sistema
              </NavLink>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
