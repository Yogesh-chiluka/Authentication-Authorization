import { useState } from "react"
import axios from 'axios'

export default function RegisterForm(){

    const [formData, setFormData] = useState({
        username:'',   
        email: '',
        fullname: '',
        role: 'User',
        password: ''
    })

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
        axios.post('https://ubiquitous-giggle-rwqwjqwwjw6fp9g7-8000.app.github.dev/api/v1/users/register',postData).then((response) => {
                console.log(response.status, response.data.token);
              });
    }

    return(
    <form onSubmit={handleSubmit} className=" text-xl text-gray-800 p-4 w-2/5 bg-gray-100 border rounded border-transparent drop-shadow-xl grid grid-rows-1 p-8 min-w-80">
             <h1 className=' mx-auto font-bold tracking-wide mb-4'>Register Form</h1>
                <label> Username</label>
                <input 
                className='border rounded outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 ' 
                type="text" 
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                />
                

                <label> Email</label>
                <input 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                />
                

                <label> Full name   </label>
                <input 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="text" 
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                />
                

                <label> Role </label>
                <select
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="text" 
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                >
                    <option value="user">User</option>
                    <option value="owner">Owner</option>
                    <option value="seller">Seller</option>
                    
                    
                </select>
                

                <label> Password</label>
                <input 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="password" 
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                />
                

                <button 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-800 my-2 py-2 px-4  text-gray-100 mt-4'
                type="submit"
                > {" "}sign up </button>
        
            
            
        </form>
        )
}