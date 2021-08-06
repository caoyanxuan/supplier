import React from 'react';
import demoRoutes from './demo';

export type IBreadcrumbItem = string | { label: string; path?: string };

export interface RouteConfig {
  path: string;
  title?: string;
  icon?: React.ReactNode;
  component?: string;
  exact?: boolean;
  access?: string;
  auth?: string | string[];
  routes?: RouteConfig[];

  /** 是否是菜单 */
  isMenu?: boolean;
  /** 隐藏Layout */
  noLayout?: boolean;
  /** 隐藏左侧菜单 */
  noNav?: boolean;
  redirect?: string;

  /**面包屑 */
  breadcrumb?: IBreadcrumbItem[];
}

const routes: RouteConfig[] = [demoRoutes];

export default routes;
