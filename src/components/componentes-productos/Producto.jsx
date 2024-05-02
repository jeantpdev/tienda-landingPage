import React from 'react'
import {convertirAMoneda, calcularPrecioConDescuento } from '@/utils/Funct.jsx';

export default function Producto(props) {

    return (
        <div className="flex flex-col gap-1 rounded-md shadow-lg">

            <div className='relative'>
                <img src={props.imagen_principal} className="w-full h-96 object-cover" alt="" />
                {props.descuento != 0 && <p className='absolute top-2 right-2 py-1 px-2 rounded-md bg-emerald-50 font-semibold text-emerald-400'>-{props.descuento}%</p>}
            </div>
            <div className="px-5">
                <a href={`/infoProductos/${props._id}`} className="text-xl font-bold tracking-wide leading-loose text-zinc-700">{props.nombre_producto}</a>
                <p className="text-slate-500">{props.descripcion}</p>
            </div>
            <div className="p-2 text-end mb-2 space-x-2">
                {props.descuento != 0 && <p className="inline-flex text-xs font-semibold tracking-tight rounded-md text-pink-400 line-through">{convertirAMoneda(props.precio)}</p> } 
                <p className="inline-flex font-semibold tracking-tight bg-pink-50 p-2 rounded-md text-pink-400">$ {calcularPrecioConDescuento(props.precio, props.descuento)}</p>
            </div>

        </div>
    )
}


