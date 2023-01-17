import React, { createRef } from 'react';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';

const routes = [
  {
    path: '/',
    name: 'Home',
    element: <HomePage />,
    nodeRef: createRef(),
  },
  {
    path: '/about',
    name: 'About',
    element: <AboutPage />,
    nodeRef: createRef(),
  },
];

export default routes;
