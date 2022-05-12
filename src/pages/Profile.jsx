import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const {user} = useSelector(state => state.auth)
  return (
    <div><h3>Email:</h3><p>{user.email}</p></div>
  )
}

export default Profile