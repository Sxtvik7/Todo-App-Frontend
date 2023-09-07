import React, { useContext } from 'react'
import { Context } from '../main';
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';

function Profile() {

  const { isAuthenticated,  loading, user } = useContext(Context);
  if(!isAuthenticated) return <Navigate to="/login"/> 

  // console.log(user)
  return loading ? (
    <Loader/>
  ):(
    <div>
      <h1>{user?.name}</h1>
      <h2>{user?.email}</h2>
    </div>
  )
}

export default Profile