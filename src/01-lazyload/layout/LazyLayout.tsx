import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { IRoute } from '../../routes/routes';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

const routes: IRoute[] = [
  {
    to: 'lazy1',
    path: 'lazy1',
    Component: LazyPage1,
    name: 'Lazy-1',
  },
  {
    to: 'lazy2',
    path: 'lazy2',
    Component: LazyPage2,
    name: 'Lazy-2',
  },
  {
    to: 'lazy3',
    path: 'lazy3',
    Component: LazyPage3,
    name: 'Lazy-3',
  },
];

export const LazyLayout = () => {
  return (
    <div>
      <h1>LazyLayout Page</h1>
      <ul>
        {routes.map(({ to, name }: IRoute) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
              {name}
            </NavLink>
          </li>
        ))}
        <Routes>
          {routes.map(({ path, Component }: IRoute) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
          {/* <Route path='*' element={<div>Not Found</div>} /> */}
          <Route path='*' element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </ul>
    </div>
  );
};

export default LazyLayout;
