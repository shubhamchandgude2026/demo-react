import React, { useEffect, useState } from 'react'

const useFetchProducts = (url) => {
  const [data,setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                setIsLoading(true);
                setError(null);

                const res = await fetch(url);
                
                if(!res.ok)
                    throw new Error("Api Failed");
                const result = await res.json();
                setData([result]);
                console.log(result);
                
            }catch(err){
                setError(err.message);
        }
        finally{
            setIsLoading(false);
        }
           
        }
        fetchData();
    },[url]);

    return [data,isLoading,error];
}

export default useFetchProducts