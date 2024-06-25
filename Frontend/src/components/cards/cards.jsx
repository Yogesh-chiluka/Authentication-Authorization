import axios from 'axios';
//import { getData } from '../../utils/data';
import { useLoaderData } from 'react-router-dom';

export const Loader = () => {
  let fetch_data = getData("https://api.github.com/users/Yogesh-Chiluka/repos")
  console.log("loading data");
  console.log(fetch_data)
  return fetch_data
};

export default function AllItemps(){
   // const [reposData, setReposData] = useState('');

    const reposData = useLoaderData();

console.log(reposData)

    return(
        <>
  <h1 className="text-xl text-gray-200 font-bold mb-2 bg-gray-00">Repositories</h1>
        <p>Hello</p>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 overflow-y-auto">

            {reposData.map((repo)=>(<Card repo={repo}/>))}

             </div>

        </>
    )
}


export function Card({repo}){


    return(
  
      
        <div className="w-[200px] h-[200px]  rounded-md  bg-gray-700 m-4" key={repo.id}>
          

        <div className="p-4 grid grid-rows-5 ">
          <h1 className="row-span-3 text-lg font-semibold  text-gray-200">{repo.name} 
          </h1>
          <p className="text-base">
            Language: {repo.language}
          </p>
          
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