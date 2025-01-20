import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {user_id} = useParams()
  return (
    <div>
      <h1 className='bg-yellow-600 text-dark pd-4 text-center'>User : {user_id}</h1>
    </div>
  )
}

export default User
