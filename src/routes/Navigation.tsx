import { BrowserRouter, NavLink, Navigate, Route, Routes } from 'react-router-dom';

import logo from '../logo.svg';
import { IRoute, routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    //Esto espera mientras cargo el componente
    <Suspense fallback={<span>Loading...</span>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='React Logo' />
            <ul>
              {routes.map(({ to, name }: IRoute) => (
                <li key={to}>
                  <NavLink to={to} className={({ isActive }) => (isActive ? 'nav-active' : '')}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <Routes>
            {routes.map(({ path, Component }: IRoute) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
