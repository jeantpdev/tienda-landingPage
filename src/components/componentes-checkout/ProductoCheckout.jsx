import React from 'react'


export default function ProductoCheckout({children, props}) {

    const calcularPrecio = (cantidad, precio) => {
        return precio * cantidad
    }

  return (
    <div className='flex justify-between items-start'>
        <div className='flex gap-5'>
            <figure>
                <img src={props.imagen_principal} className="h-20" alt={props.nombre_producto} />
            </figure>
            <div className="flex flex-col">
                <p className='font-semibold tracking-tight leading-tight'>{props.nombre_producto}</p>
                <p className='text-sm text-slate-500'>Material: {props.material}</p>
                <p className='text-sm text-slate-500'>x {props.cantidad}</p>
                <p className='text-sm text-slate-500'>{calcularPrecio(props.cantidad, props.precio)} COP</p>
            </div>
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}


