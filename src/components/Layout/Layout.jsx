import React from 'react';
import { Container } from '@mui/material';
import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import routes from '@/config/router';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const { nodeRef } = routes.find((route) => route.path === location.pathname) ?? {};

  return (
    <Container disableGutters maxWidth={false}>
      <Header />
      <SwitchTransition>
        <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={400} classNames="page" unmountOnExit>
          <div ref={nodeRef} className="page">
            {currentOutlet}
          </div>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </Container>
  );
}

export default Layout;
