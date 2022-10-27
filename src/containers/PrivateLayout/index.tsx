import Header from '../Header';
import { Outlet } from 'react-router-dom';

function PrivateLayout({ children }: any) {
  return (
    <div>
      <Header />
        {children}
      <Outlet />
    </div>
  );
}

export default PrivateLayout;
