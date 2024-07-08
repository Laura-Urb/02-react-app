import { lazy, LazyExoticComponent } from 'react';
import { LazyPage1, LazyPage2, LazyPage3, NoLazy } from '../01-lazyload/pages';

type JSXComponent = () => JSX.Element;

export interface IRoute {
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}
export const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../01-lazyload/layout/LazyLayout'));

export const routes: IRoute[] = [
  {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout, //LazyPage1,
    name: 'Lazy Layout',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
