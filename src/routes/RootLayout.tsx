import { Outlet } from 'react-router-dom';

import HeaderMain from 'src/components/HeaderMain/HeaderMain';

export default function RootLayout() {
  return (
    <>
      <HeaderMain />
      <Outlet />
    </>
  );
}
