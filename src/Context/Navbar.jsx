import React, { useContext } from 'react'
import { Usercontext } from './Usercontext'

function Navbar() {
  const UserName = useContext(Usercontext);

  console.log(UserName);

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <span>Home</span>
      
      <span>About</span>
      <span>Contact</span>

      <mark>Hello {UserName}</mark>

    </div>
  )
}

export default Navbar