import { useState } from "react";
import React from 'react';

export default function Galeria(props) {
    const srcImagenPrincipal = props.imagen_principal;
    const srcImagenesProductos = props.imagenes_productos;

    const [imagenPrincipal, setImagenPrincipal] = useState(srcImagenPrincipal);
    const [imagenSeleccionada, setImagenSeleccionada] = useState(0);

    return (
        <div className="space-y-2 lg:flex lg:flex-row-reverse lg:justify-center lg:space-x-2 lg:gap-x-2">
            <div className="md:grid md:items-center lg:justify-center">
                <img src={imagenPrincipal} 
                    className="w-full lg:w-96" 
                    alt={`${props.nombre_producto} producto`}/>
            </div>
            
            <div className="flex gap-x-2 overflow-auto lg:flex lg:flex-col lg:h-96 lg:gap-y-2 ">
                {srcImagenesProductos.map((imagen, index) => (
                    <img 
                        key={index} 
                        onClick={() => {
                            setImagenPrincipal(imagen);
                            setImagenSeleccionada(index);
                        }} 
                        src={imagen} 
                        className={`w-20 lg:h-20 lg:w-full cursor-pointer ${index === imagenSeleccionada ? 'border-2 border-slate-500' : ''}`} 
                        alt={`${props.nombre_producto} producto`}
                    />
                ))}
            </div>
        </div>
    );
}
