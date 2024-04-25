import React from 'react'

export default function indexActual(props) {

  return (
    <div className="flex gap-x-2">
        <a href="/" className="text-slate-500 hover:text-black">Inicio</a>
        <p> {'>'} </p>
        <a href="/productos/" className="text-slate-500 hover:text-black">Productos</a>
        <p> {'>'} </p>
        <p className="font-semibold">{props.nombreProducto}</p>
     </div>
  )
}