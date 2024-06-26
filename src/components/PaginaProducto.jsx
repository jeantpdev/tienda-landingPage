import React, { useState, useEffect } from 'react';
import { showAlert } from '@/utils/Alerts.jsx';
import Galeria from '@/components/componentes-productos/Galeria';
import IndexActual from '@/components/componentes-productos/indexActual';
import { convertirAMoneda, calcularPrecioConDescuento } from '@/utils/Funct.jsx';

export default function PaginaProducto(props) {

    console.log(props)

    const [productData, setProductData] = useState({
        _id: '',
        nombre_producto: '',
        descripcion: '',
        dimensiones: '',
        material:'',
        precio:'',
        descuento:''
    });

    useEffect(() => {
        // Actualizar el estado del producto cuando las props cambien
        setProductData({
            _id: props._id,
            imagen_principal: props.imagen_principal,
            nombre_producto: props.nombre_producto,
            descripcion: props.descripcion,
            dimensiones: props.dimensiones,
            material: props.material,
            precio: props.precio,
            descuento: props.descuento
        });
    }, [props]);


    const addToCart = () => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Buscar si el producto ya está en el carrito
        const existingProductIndex = cart.findIndex(product => product._id === productData._id);

        // Si el producto ya está en el carrito, aumentar la cantidad en 1
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity += 1;
            showAlert("Se agrego una cantidad!")
        } else {
            // Si el producto no está en el carrito, agregarlo con cantidad 1
            cart.push({ ...productData, quantity: 1 });
            showAlert("Producto agregado!")
        }

        // Guardar el carrito actualizado en localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Producto añadido al carrito:', productData['nombre_producto']);
    };

  return (
    <div className="px-5 py-10 space-y-5 md:py-20 md:max-w-xl lg:max-w-6xl md:mx-auto">
    <IndexActual nombreProducto = {props.nombre_producto}/>

    <div className="lg:grid lg:grid-cols-2 space-x-1">
        {props.imagen_principal != 'no dado' ?
            <Galeria imagen_principal = {props.imagen_principal} imagenes_productos = {props.imagenes_productos} nombre_producto = {props.nombre_producto} client:load />
         : 
         <p>no hay imagenes</p>
        }

        <div className="lg:flex lg:flex-col  mt-5 lg:mt-0 space-y-5">
            <div>
                <p className="text-slate-400 text-md">{props.categoria}</p>
                <h2 className="text-2xl font-semibold text-slate-700">{props.nombre_producto}</h2>
            </div>

            <div className="text-slate-600 space-y-5">
                <p className="text-lg">{props.descripcion}</p>
                <div>
                    <p className="text-slate-700 text-md"><span className="font-semibold">Dimensiones:</span> {props.dimensiones}</p>
                    <p className="text-slate-700 text-md"><span className="font-semibold">Material:</span> {props.material}</p>
                </div>
                {
                    props.colores && 
                    <div className="space-y-2">
                        <p className="font-semibold">Colores disponibles:</p>
                        <div className="flex gap-x-2">
                            <div className="w-[20px] h-[20px] bg-blue-500"></div>
                            <div className="w-[20px] h-[20px] bg-yellow-500"></div>
                            <div className="w-[20px] h-[20px] bg-slate-500"></div>
                            <div className="w-[20px] h-[20px] bg-red-500"></div>
                        </div>
                    </div>
                }

            </div>

            <div className='space-y-2'>
                {(props.descuento != 0 ?
                    <div> 
                        <p className="text-slate-700 font-semibold tracking-tight rounded-md text-xl">$ {convertirAMoneda(calcularPrecioConDescuento(props.precio, props.descuento))} {<span className='text-xs bg-emerald-50 p-2 text-emerald-500'>-{props.descuento}%</span>} </p>
                        <p className="text-slate-400 line-through font-semibold text-xs">$ {convertirAMoneda(props.precio)} COP</p>
                    </div>
                    :
                    <p className="text-slate-700 font-semibold tracking-tight rounded-md text-xl">$ {convertirAMoneda(calcularPrecioConDescuento(props.precio, props.descuento))} </p>
                )}
            </div>

            <div>
                <button onClick = {addToCart} className="w-full inline items-center justify-end px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-10">Agregar al carrito</button>
            </div>

        </div>
    </div>
</div>

  )
}
