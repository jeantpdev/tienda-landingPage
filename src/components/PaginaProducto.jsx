import React from 'react'

import Galeria from '@/components/componentes-productos/Galeria';
import IndexActual from '@/components/componentes-productos/indexActual';

export default function PaginaProducto(props) {

  return (
    <div class="px-5 py-10 space-y-5 md:py-20 md:max-w-xl lg:max-w-6xl md:mx-auto">
    <IndexActual nombreProducto = {props.nombre_producto}/>

    <div class="lg:grid lg:grid-cols-2 space-x-1">

        <Galeria imagen_principal = {props.imagen_principal} imagenes_productos = {props.imagenes_productos} client:load />

        <div class="lg:flex lg:flex-col  mt-5 lg:mt-0 space-y-5">
            <div>
                <p class="text-slate-400 text-md">Categoria producto</p>
                <h2 class="text-2xl font-semibold text-slate-700">{props.nombre_producto}</h2>
            </div>

            <div class="text-slate-600 space-y-5">
                <p class="text-lg">{props.descripcion}</p>
                <div>
                    <p class="text-slate-700 text-md"><span class="font-semibold">Dimensiones:</span> {props.dimensiones}</p>
                    <p class="text-slate-700 text-md"><span class="font-semibold">Material:</span> {props.material}</p>
                </div>
                {
                    props.colores && 
                    <div class="space-y-2">
                        <p class="font-semibold">Colores disponibles:</p>
                        <div class="flex gap-x-2">
                            <div class="w-[20px] h-[20px] bg-blue-500"></div>
                            <div class="w-[20px] h-[20px] bg-yellow-500"></div>
                            <div class="w-[20px] h-[20px] bg-slate-500"></div>
                            <div class="w-[20px] h-[20px] bg-red-500"></div>
                        </div>
                    </div>
                }

            </div>

            <div>
                <p class="text-slate-700 font-semibold text-xl">$ {props.precio} COP</p>
            </div>

            <div>
                <a href="#" class="w-full inline items-center justify-end px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-10">Agregar al carrito</a>
            </div>

        </div>
    </div>
</div>

  )
}
