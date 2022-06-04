import React from 'react'
import Header from './components/Header'
import NoteList from './components/NoteList'
import Input from './components/Input'
import Textarea from './components/Textarea'


const App = () => {
  return (
    <div className='container mx-auto flex flex-col justify-center items-center  w-full' >
        <Header/>
        <Input/>
        <Textarea/>
        <NoteList/>
    


    </div>
  )
}

export default App
