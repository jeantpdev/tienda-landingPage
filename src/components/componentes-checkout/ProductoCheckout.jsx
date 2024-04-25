import React from 'react'


export default function ProductoCheckout({children, props}) {
    console.log(props)
  return (
    <div className='flex justify-between items-start'>
        <div className='flex gap-5'>
            <figure>
                <img src={props.imagen_principal} className="h-36" alt={props.nombre_producto} />
            </figure>
            <div className="flex flex-col">
                <p>Nombre: {props.nombre_producto}</p>
                <p>Material: {props.material}</p>
                <p>Cantidad: {props.cantidad}</p>
                <p>Precio: {props.precio} COP</p>
            </div>
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}


