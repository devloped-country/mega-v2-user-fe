import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      공통 레이아웃
      <Outlet />
    </div>
  );
}
