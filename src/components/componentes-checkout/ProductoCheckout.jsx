import React from 'react'


export default function ProductoCheckout({children, props}) {

    const calcularPrecio = (cantidad, precio, descuento) => {
            let total = 0;
            // Convierte el precio y el descuento a números decimales
            const precioNumerico = parseFloat(precio);
            const descuentoNumerico = parseFloat(descuento);
            
            if (descuentoNumerico != 0) {
                const precioConDescuento = precioNumerico * (1 - (descuentoNumerico / 100));
                total += precioConDescuento * cantidad;
                return total.toLocaleString('es-PE', { style: 'currency', currency: 'COP' }); 
            } else {
                total += precioNumerico * cantidad;
                return total.toLocaleString('es-PE', { style: 'currency', currency: 'COP' }); 
            }
    }

    const precioXcantidad = (precio, cantidad) => {
        let total = 0;
        
        return total = (precio * cantidad).toLocaleString('es-PE', { style: 'currency', currency: 'COP' });
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
                <p className='text-sm text-slate-500'>{calcularPrecio(props.precio, props.cantidad, props.descuento)}</p>
                {props.descuento ? <p className='text-xs text-slate-500 line-through'>{precioXcantidad(props.precio, props.cantidad)}</p> : ""}
                
            </div>
        </div>

        <div>
            {children}
        </div>
    </div>
  )
}


