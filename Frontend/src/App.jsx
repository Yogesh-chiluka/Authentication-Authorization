
import './styles/tailwind.css';
import ReactDOM from 'react-dom/client'
import MasterLayout from './components/Layouts/masterLayout'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import SignUpLogin from './components/Forms/loginSignup';
import LoginForm from './components/Forms/loginForm';
import RegisterForm from './components/Forms/registerFrom';
import SellerRegistrationStatus from './components/Forms/sellerRegistrationStatus';
import Layout2 from './components/Layouts/layout-2';
import Owner from './components/Forms/LoginTypes/Owner';
import Seller from './components/Forms/LoginTypes/Seller';
import User from './components/Forms/LoginTypes/User';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<MasterLayout/>} >
        <Route index element={<SignUpLogin/> } />
        <Route path='/LoginForm' element={<LoginForm/>} />
        <Route path='/RegisterForm' element={<RegisterForm/>} />
        <Route path='/SellerRegistrationStatus' element={<SellerRegistrationStatus/>} />
        <Route path='/login' element={<Layout2/>}>
            <Route path='/login/Owner' element={<Owner/> } />
            <Route path='/login/Seller' element={<Seller/> } />
            <Route path='/login/User' element={<User/> } />
        </Route>
    </Route>
  )
);


function App() {

  return (
    <>
        <RouterProvider router={router} />
  </>)
}

export default App
