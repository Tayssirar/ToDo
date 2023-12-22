import React from 'react'
import Navbar from '../Components/Navbar'
import InputTodo from '../Components/InputTodo'
import ListTodo from '../Components/ListTodo'
import Footer from '../Components/Footer'

export default function TodoPage() {
  return (
    <div >
      <Navbar/>
      <InputTodo/>
      <ListTodo/>
      <Footer/>
    </div>
  )
}

