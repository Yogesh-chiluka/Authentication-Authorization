export default function LoginForm(){

    return(
    <form className=" text-xl text-gray-800 p-4 w-2/5 bg-gray-100 border rounded border-transparent drop-shadow-xl grid grid-rows-1 p-8 min-w-80">
             <h1 className=' mx-auto font-bold tracking-wide mb-4'>Login Form</h1>
                <label> Username</label>
                <input 
                className='border rounded outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 ' 
                type="text" 
                name="username"
                />
                

                <label> Email</label>
                <input 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="email" />
                

                <label> Password</label>
                <input 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-100 my-2 py-2 px-4 '
                type="password" 
                name="password"
                />
                

                <button 
                className='border rounded  outline-0 drop-shadow-sm border-gray-300
                bg-gray-800 my-2 py-2 px-4  text-gray-100 mt-4'
                type="button"
                > Login </button>
        
            
            
        </form>
        )
}