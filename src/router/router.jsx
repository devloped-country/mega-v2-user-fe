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
import CheckIn from '@/pages/qr/CheckIn';
import CheckOut from '@/pages/qr/CheckOut';
import Location from '@/pages/qr/Location';
import Auth from '@/pages/qr/Auth';
import ReAuth from '@/pages/qr/ReAuth';
import SignUp from '@/pages/signup/SignUp';
import Password from '@/pages/signup/Password';
import Home from '../pages/home/Home';
import Curriculum from '../pages/curriculum/Curriculum';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/qr' element={<QR />} />
        <Route path='/qr/checkin' element={<CheckIn />} />
        <Route path='/qr/checkout' element={<CheckOut />} />
        <Route path='/qr/location' element={<Location />} />
        <Route path='/qr/auth' element={<Auth />} />
        <Route path='/qr/reauth' element={<ReAuth />} />
        <Route path='/attendance' element={<Attendance />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/notice' element={<Notice />} />
        <Route path='/notice/:id' element={<NoticeDetail />} />
        <Route path='/leave' element={<Leave />} />
        <Route path='/note' element={<Note />} />
        <Route path='/note/receive' element={<NoteReceive />} />
        <Route path='/note/editor' element={<NoteEditor />} />
        <Route path='/curriculum' element={<Curriculum />} />
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
