import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from 'react-router-dom';
import Layout from '@/layout/Layout';
import Login from '@/pages/login/Login';
import QR from '@/pages/qr/QR';
import Attendance from '@/pages/attendance/Attendance';
import Menu from '@/pages/menu/Menu';
import Notice from '@/pages/notice/Notice';
import NoticeDetail from '@/pages/notice/NoticeDetail';
import Leave from '@/pages/leave/Leave';
import Note from '@/pages/note/Note';
import NoteReceive from '@/pages/note/NoteReceive';
import NoteEditor from '@/pages/note/NoteEditor';
import Location from '@/pages/qr/Location';
import Auth from '@/pages/qr/Auth';
import SignUp from '@/pages/signup/SignUp';
import Password from '@/pages/signup/Password';
import Home from '@/pages/home/Home';
import Curriculum from '@/pages/curriculum/Curriculum';
import Success from '@/pages/qr/Success';
import NavigationGuard from '@/components/common/NavigationGuard';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <NavigationGuard>
              <Home />
            </NavigationGuard>
          }
        />
        <Route
          path='/qr'
          element={
            <NavigationGuard>
              <QR />
            </NavigationGuard>
          }
        />
        <Route
          path='/qr/success'
          element={
            <NavigationGuard>
              <Success />
            </NavigationGuard>
          }
        />
        <Route
          path='/qr/location'
          element={
            <NavigationGuard>
              <Location />
            </NavigationGuard>
          }
        />
        <Route
          path='/qr/auth'
          element={
            <NavigationGuard>
              <Auth />
            </NavigationGuard>
          }
        />
        <Route
          path='/attendance'
          element={
            <NavigationGuard>
              <Attendance />
            </NavigationGuard>
          }
        />
        <Route
          path='/menu'
          element={
            <NavigationGuard>
              <Menu />
            </NavigationGuard>
          }
        />
        <Route
          path='/notice'
          element={
            <NavigationGuard>
              <Notice />
            </NavigationGuard>
          }
        />
        <Route
          path='/notice/:id'
          element={
            <NavigationGuard>
              <NoticeDetail />
            </NavigationGuard>
          }
        />
        <Route
          path='/leave'
          element={
            <NavigationGuard>
              <Leave />
            </NavigationGuard>
          }
        />
        <Route
          path='/note'
          element={
            <NavigationGuard>
              <Note />
            </NavigationGuard>
          }
        />
        <Route
          path='/note/receive'
          element={
            <NavigationGuard>
              <NoteReceive />
            </NavigationGuard>
          }
        />
        <Route
          path='/note/editor'
          element={
            <NavigationGuard>
              <NoteEditor />
            </NavigationGuard>
          }
        />
        <Route
          path='/curriculum'
          element={
            <NavigationGuard>
              <Curriculum />
            </NavigationGuard>
          }
        />
      </Route>
      <Route path='/login'>
        <Route index element={<Login />} />
      </Route>
      <Route path='/signup/auth'>
        <Route index element={<SignUp />} />
      </Route>
      <Route path='/signup/password'>
        <Route index element={<Password />} />
      </Route>
    </>
  )
);
