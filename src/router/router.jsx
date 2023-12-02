import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '@/layout/Layout';
import Login from '@/pages/login/Login';
import QR from '@/pages/qr/QR';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<div>asd</div>} />
        <Route path='/qr' element={<QR />} />
      </Route>
      <Route path='/login'>
        <Route index element={<Login />} />
      </Route>
    </>
  )
);
