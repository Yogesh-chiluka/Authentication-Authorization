import { useState } from "react"
import { Form, useNavigate } from "react-router-dom";

export default function LoginForm(){
        const [showHide, setShowHide] = useState(true);
        const navigate = useNavigate();
        const [formData, setFormData] = useState({
                
        })

        const handleToggle = () => {
                setShowHide(!showHide);
        }

        const handleInputChange = () => {
                setForm
        }
        
        const handleSubmit = (event) =>{
                event.preventDefault();
                const formData = new FormData(event.target)

                fetcher.submit(formData, {method:'post', action:''})
        }
        
    return(
    <form
    onSubmit={handleSubmit}
     className="select-none text-xl text-gray-800 p-4 w-2/5 bg-gray-100 border rounded border-transparent drop-shadow-xl grid grid-rows-1 p-8 min-w-80">
             <h1 className=' mx-auto font-bold tracking-wide mb-4'>Login Form</h1>
                <label> Role</label>
                <select
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="text" 
                name="role"
                >
                    <option value="user">User</option>
                    <option value="owner">Owner</option>
                    <option value="seller">Seller</option>
                    
                    
                </select>
                

                <label> Email</label>
                <input 
                placeholder="Enter your email"
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="email"
                required
                 />
                

                <label> Password</label>
                <span><input
                placeholder="Enter your password here" 
                className='border  w-4/5 rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type={`${showHide ? 'text':'password'}`}
                name="password"
                />
                <span 
                onClick={handleToggle}
                className='ml-2 border w-4/5 rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                >{showHide?"Hide":"Show"}</span>
                </span>
                

                <button 
                className='  border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-800 my-2 py-2 px-4  text-gray-100 mt-4'
                type="button"
                > Login </button>
        
            
            
        </form>
        )
}