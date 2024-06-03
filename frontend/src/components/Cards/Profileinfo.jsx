import React from 'react'

const Profileinfo = ({onLogout}) => {
  return (
    <div>
        <p>Akash</p>
        <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default Profileinfo