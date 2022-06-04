import { TextField } from '@mui/material'
import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { searchNot } from '../redux/notes/notesSlice';


const Input = () => {
  const dispatch = useDispatch();
  const [search,setSearch] = useState('');
  
    useEffect(()=>{
      dispatch(searchNot(search))
    },[search])

  

  return (
    <div className='mt-6'>
        <TextField   value={search} onChange={(e)=>setSearch(e.target.value)} id="outlined-basic" label="Search..." variant="outlined" />
    </div>
  )
}

export default Input