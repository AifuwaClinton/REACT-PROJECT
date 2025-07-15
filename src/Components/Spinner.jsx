// src/Components/Spinner.jsx
import React from 'react';
import { ImSpinner3 } from "react-icons/im";

function Spinner() {
  return (
    
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50" >
      <div className="text-center">
        <ImSpinner3 className="animate-spin text-4xl text-blue-500 absolute ml-18 " /><br /><br /><br /><br />
       </div>

  <div className='text-center '>
    <p>Loading amazing content</p>
    </div>
    </div>

   
  );
}

export default Spinner;
