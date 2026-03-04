import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Params = () => {
    const [name,setName] = useState('');

        // const {username} = useParams();
        // setName(username)
  
  return (
    
    <div>
        hello ,{name}
    </div>
  )
}

export default Params