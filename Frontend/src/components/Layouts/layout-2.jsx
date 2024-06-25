import React from 'react';
import { AllItemps } from '../cards/cards';




export default function Layout2(){
    //flex justify-center items-center 

    return(<div className="min-h-screen ">
        
        <div className='w-full bg-white mx-auto'>
            <div className='w-full flex justify-between border-b-2 border-gray-100 '>
                <div className='mr-7 ml-2 px-4 py-2 flex font-extrabold text-2xl tracking-tight border-r-2 border-gray-100'>
                    Auth
                </div>
                <div className='bg-gray-800'></div>
                <div className='flex justify-end'>
                    <button className='border rounded border-transparent ml-7 mr-2 my-2 px-4 py-2'>Login </button>
                    <button className='border rounded border-transparent mr-7 ml-2 my-2 px-4 py-2 bg-green-600 flex text-white'><img src='src/assets/cart.svg' className='mr-2 invert brightness-0 ' width="25px"/>My Cart</button>
                </div>
            </div>
        </div>
        
        
        <div className='w-3/5  mx-auto'>
            <AllItemps/>
        </div>
        
    </div>)
}   