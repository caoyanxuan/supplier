import React from 'react';
import demoRoutes from './demo';

export type IBreadcrumbItem = string | { label: string; path?: string };

export interface RouteConfig {
  path: string;
  title?: string;
  icon?: React.ReactNode;
  component?: string;
  exact?: boolean;
  routes?: RouteConfig[];
  redirect?: string;
}

const routes: RouteConfig[] = [
  {
    path: '/',
    component: '../../common/components/Layout.tsx',
    routes: [
      demoRoutes,
    ],
  },
];

export default routes;
