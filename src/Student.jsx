import React from 'react'

function Student(props) {
  return (
    <div className='yu'>
        <p>name:{props.name}</p>
        <p>age:{props.age}</p>
        <p>Student:{props.isstudent ? "yes" :"no"}</p>
    </div>
  )
}

export default Student