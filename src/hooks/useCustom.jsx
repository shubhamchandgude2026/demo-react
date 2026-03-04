import React, { useEffect, useState } from 'react'

const useCustom = (input,delay) => {
    const [debouncedValue,setDebouncedValue] = useState('');
    useEffect(()=>{
        setTimeout(()=>{
            setDebouncedValue(input);
        },delay)
    },[input,delay])
    return debouncedValue;
}

export default useCustom