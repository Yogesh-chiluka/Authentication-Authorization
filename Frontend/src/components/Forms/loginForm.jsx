import { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function LoginForm(){

        const [showHide, setShowHide] = useState(true);

        const navigate = useNavigate();

        const [formData, setFormData] = useState({
                
                email: '',
                role: 'User',
                password: ''
        })
       

        const handleToggle = () => {
                setShowHide(!showHide);
        }

        const handleInputChange = (e) => {
                setFormData({
                        ...formData,
                        [e.target.name] : e.target.value
                })
                console.log(formData)
        }
        
        const handleSubmit = (event) =>{
                event.preventDefault();
                const postData = formData;
                axios.post('https://ubiquitous-giggle-rwqwjqwwjw6fp9g7-8000.app.github.dev/api/v1/users/login',postData).then((response) => {
                        console.log(response.status, response.data.accessToken);
                        if(response.status === 200){
                                
                                if(response.data.data.registrationStatus === 'accepted'){

                                        switch(response.data.data.role){

                                                case 'Owner':   navigate("/login/Owner");
                                                                break;

                                                case 'Seller':   navigate("/login/Seller");
                                                                break;

                                                case 'User':   navigate("/login/User");
                                                                break;
                                        
                                        }
                                }
                                else{
                                        navigate("/SellerRegistrationStatus")
                                }
                                console.log(response.data.data.registrationStatus)
                                
                        }
                      });
        }
        
    return(<div className="min-h-screen flex justify-center items-center ">

        
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
                onChange={handleInputChange}
                >
                    <option value="User">User</option>
                    <option value="Owner">Owner</option>
                    <option value="Seller">Seller</option>
                    
                    
                </select>
                
                <label> Email</label>
                <input 
                placeholder="Enter your email"
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="email"
                name= "email"
                required
                onChange={handleInputChange}
                 />
                
                <label> Password</label>
                <span><input
                placeholder="Enter your password here" 
                className='border  w-4/5 rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type={`${showHide ? 'text':'password'}`}
                name="password"
                onChange={handleInputChange}
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
                type="submit"
                > Login </button>
        
            
            
        </form>
        </div>)
}