

import { NavLink,useNavigation } from 'react-router-dom';


export default function SignUpLogin(){


    return(

        <div className="text-xl text-center text-gray-300 p-4 w-80 sm:w-1/4 h-1/4 bg-gray-400 border rounded border-transparent drop-shadow-2xl grid grid-rows-1 p-8">
           
            <NavLink to="/LoginForm"  className=' border rounded border-transparent drop-shadow-2xl bg-gray-900 my-2 py-2 px-4 hover:bg-gray-800 text-gray-200'> Login </NavLink>
            <NavLink to="/RegisterForm"  className=' block border rounded border-transparent drop-shadow-2xl bg-gray-900 my-2 py-2 px-4 hover:bg-gray-800 text-gray-200'> signUP </NavLink>
            
        </div>)
}