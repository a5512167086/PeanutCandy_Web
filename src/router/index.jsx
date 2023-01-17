import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/Layout/Layout';
import routes from '@/config/router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: routes.map((route) => ({
      index: route.path === '/',
      path: route.path === '/' ? undefined : route.path,
      element: route.element,
    })),
  },
]);

export default router;
