import React from 'react'

export default function indexActual(props) {
  return (

    <div class="flex gap-x-2">
        <a href="/" class="text-slate-500 hover:text-black">Inicio</a>
        <p> {'>'} </p>
        <a href="/productos/" class="text-slate-500 hover:text-black">Productos</a>
        <p> {'>'} </p>
        <p class="font-semibold">{props.nombreProducto}</p>
     </div>
  )
}