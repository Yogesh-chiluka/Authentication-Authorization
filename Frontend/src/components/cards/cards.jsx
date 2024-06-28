import axios from 'axios';
import { useState, useEffect } from 'react';
//import { getData } from '../../utils/data';
// import { useLoaderData } from 'react-router-dom';

// export const Loader = () => {
//   let fetch_data = getData("https://ubiquitous-giggle-rwqwjqwwjw6fp9g7-8000.app.github.dev/api/v1/products/")
//   console.log("loading data");
//   console.log(fetch_data)
//   return fetch_data
// };
const baseURL = "https://ubiquitous-giggle-rwqwjqwwjw6fp9g7-8000.app.github.dev/api/v1/products/"
export default function AllItems(){
   // const [reposData, setReposData] = useState('');

    // const reposData = useLoaderData();

    const [data, setData] = useState(null);

    useEffect(()=>{
    axios.get(baseURL,{
      responseType: "json",
    } )
  .then(function (response) {
    // handle success
    setData(response.data.data);
    console.log(response.data.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    },[])

    console.log(data)
    if (!data) return null




    
    return(
        <>
        <h1 className="text-xl text-gray-200 font-bold mb-2 bg-gray-00">Repositories</h1>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">

            {data.map((repo)=>(<Card key = {repo._id} repo={repo}/>))}

             </div>

        </>
    )
}


export function Card({repo}){


    return(
  
      
        <div className="w-[200px] h-[200px]  rounded-md  bg-gray-700 m-4" key = {repo._id}>
          

        <div className="p-4 grid grid-rows-5 ">
          <h1 className="row-span-3 text-lg font-semibold  text-gray-200">{repo.title} 
          </h1>
          <img src={repo.thumbnail} />
          
          <a href={repo.html_url} target="_blank" ><button
            type="button"
            className="w-full rounded-sm bg-slate-600 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button></a>
        </div>
      </div>      
    
    )
}