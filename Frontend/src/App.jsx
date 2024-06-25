
import './styles/tailwind.css';
import ReactDOM from 'react-dom/client'
import Layout from './components/Layouts/layoutLoginSignup'

import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import SignUpLogin from './components/Forms/loginSignup';
import LoginForm from './components/Forms/loginForm';
import RegisterForm from './components/Forms/registerFrom';
import SellerRegistrationStatus from './components/Forms/sellerRegistrationStatus';
import Layout2 from './components/Layouts/layout-2';

const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout2/>} >
        <Route index element={<SignUpLogin/> } />
        <Route path='/LoginForm' element={<LoginForm/>} />
        <Route path='/RegisterForm' element={<RegisterForm/>} />
        <Route path='/SellerRegistrationStatus' element={<SellerRegistrationStatus/>} />
        <Route path='/login/layout2' element={Layout2}/>
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
