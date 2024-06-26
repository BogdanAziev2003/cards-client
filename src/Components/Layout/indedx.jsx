import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);

export default Layout;
