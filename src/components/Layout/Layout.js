import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, List, NavBtn } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <List>
          <li>
            <NavBtn to="/">Home</NavBtn>
          </li>
          <li>
            <NavBtn to="/movies">Movies</NavBtn>
          </li>
        </List>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
