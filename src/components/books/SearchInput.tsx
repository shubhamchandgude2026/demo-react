import React, { useEffect, useState } from 'react'
import { useDebounce } from '../utils/debounce';
import { Input } from '@mui/material';

const SearchInput = ({callback}:{callback:any}) => {
   const [search, setSearch] = useState<string>('');
  const debounceValue = useDebounce(search, 500);
    useEffect(()=>{
      callback(debounceValue);
    },[debounceValue]);
  return (
    <>
    <Input type="text" placeholder="search books" value={search} onChange={(e) => setSearch(e.target.value)} />
      {}
    </>
  )
}

export default SearchInput