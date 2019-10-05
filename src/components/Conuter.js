import React, { useState, useEffect } from 'react'


const Conuter = ({ number, holi }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setCount(number)
  },[])

  const handleClick = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <p>Contador: {number} {holi}</p>
      <p onClick={handleClick} >{ count }</p>
    </div>
  )
}

export default Conuter