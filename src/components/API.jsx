import React, { useContext } from 'react'
import Card from './ui/Card';
import useFetchProducts from '../hooks/useFetchProducts';
import UserContextProvider, { userContext } from '../context/UserContextProvider';
const API = () => {
    const [data,error,isLoading] = useFetchProducts("https://dummyjson.com/products");
    const {user} = useContext(userContext);
  return (
    <div>
        Hello,{user}
        {
      isLoading ? <h2>Loading .....</h2>
      :<div className='flex'>
        {
          data[0]?.products?.map((data)=>{
        return <Card key={data.id} title={data.title} dec={data.description} cat={data.category}/>
      })
        }
      </div> 
      
    }
    </div>
  )
}

export default API