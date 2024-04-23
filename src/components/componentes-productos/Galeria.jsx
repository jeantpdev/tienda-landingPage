import { useState } from "react"
import React from 'react'

export default function Galeria(props) {

    const srcImagenPrincipal = props.imagen_principal

    const srcImagenesProductos = props.imagenes_productos

    const [imagenPrincipal, setImagenPrincipal] = useState(srcImagenPrincipal);

    return (
        <div className= "space-y-2 lg:flex lg:flex-row-reverse lg:justify-center lg:space-x-2 lg:gap-x-2">
            <div className="md:grid md:items-center lg:justify-center">
                <button><img src={imagenPrincipal} className="w-full lg:w-96" alt=""/></button> 
            </div>
            
            <div className="flex gap-x-2 overflow-auto lg:flex lg:flex-col lg:h-96 lg:gap-y-2">
                {srcImagenesProductos.map((imagen, index) => {
                return <img key={index} onClick={() => setImagenPrincipal(imagen)} src = {imagen} className="w-20 lg:h-20 lg:w-full cursor-pointer" alt=""/>
                })}
            </div>
        </div>


    )
}

