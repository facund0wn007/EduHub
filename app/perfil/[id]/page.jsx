import React from 'react'
import Signout from './components/signout'

const page = ({ params }) => {
  
  return (
    <>
      <h1>usuario: {params.id}</h1>
      <Signout/>
    </>
  )
}

export default page