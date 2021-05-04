import React, { useRef } from 'react'

function Mensaje() {
  const mensaje = useRef()

  return (
    <div ref={mensaje}>
      Este es un mensaje
    </div>
  )
}

export default Mensaje
