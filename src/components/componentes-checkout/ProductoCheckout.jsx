import React from 'react'
import { calcularPrecioXCantidad, calcularPrecioConDescuentoYCantidad } from '@/utils/Funct.jsx';


export default function ProductoCheckout({children, props}) {

  return (
    <div className='flex justify-between items-start'>
        <div className='flex gap-5'>
            <figure>
                <img src={props.imagen_principal} className="h-20 w-20 object-cover" alt={props.nombre_producto} />
            </figure>
            <div className="flex flex-col">
                <p className='font-semibold tracking-tight leading-tight'>{props.nombre_producto}</p>
                <p className='text-sm text-slate-500'>x {props.cantidad}</p>
                <p className='text-sm text-slate-500'>{calcularPrecioConDescuentoYCantidad(props.precio, props.cantidad, props.descuento)}</p>
                {props.descuento ? <p className='text-xs text-slate-500 line-through'>{calcularPrecioXCantidad(props.precio, props.cantidad)}</p> : ""}
                
            </div>
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}
