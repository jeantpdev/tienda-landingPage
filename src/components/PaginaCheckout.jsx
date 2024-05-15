import React, { useState, useEffect } from 'react';
import ProductoCheckout from './componentes-checkout/ProductoCheckout';
import { showConfirmDialog, showAlert } from '@/utils/Alerts.jsx';
import { convertirAMoneda } from '@/utils/Funct.jsx';
import { crearPedido } from '@/utils/apiPedidos';

export default function Carrito() {
    const [cart, setCart] = useState([]);
    let [precioTotal, setPrecioTotal] = useState(0)

    const [datosCliente, setDatosCliente] = useState({
        nombre : '',
        apellido : '',
        correo : '',
        numero : '',
        ciudad : '',
        direccion : '',
    })

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        calcularPrecioTotal(storedCart);
        setCart(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        calcularPrecioTotal(updatedCart); // Llama a calcularPrecioTotal con el nuevo carrito actualizado
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
        window.location.href = window.location.href;
    };

    const calcularPrecioTotal = (cart) => {
        let total = 0;
        cart.forEach(producto => {
            // Convierte el precio y el descuento a números decimales
            const precioNumerico = parseFloat(producto.precio);
            const descuentoNumerico = parseFloat(producto.descuento);
            
            if (descuentoNumerico != 0) {
                const precioConDescuento = precioNumerico * (1 - (descuentoNumerico / 100));
                total += precioConDescuento * producto.quantity;
            } else {
                total += precioNumerico * producto.quantity;
            }
        });
        
        setPrecioTotal(convertirAMoneda(total));
    };    

    const enviarPedido = (event) => {
        event.preventDefault();
        // Eliminar campos no deseados del carrito y añadir el precio con descuento
        const carritoModificado = cart.map(producto => {
            // Copiar el producto para no modificar el original
            const productoModificado = { ...producto };
            // cambios de nombres
            productoModificado.total = productoModificado.precio;
            productoModificado.cantidad = productoModificado.quantity;
            // Calcular el precio con descuento
            const precioNumerico = parseFloat(productoModificado.precio);
            const descuentoNumerico = parseFloat(productoModificado.descuento);
            const precioConDescuento = descuentoNumerico !== 0 ? precioNumerico * (1 - (descuentoNumerico / 100)) : precioNumerico;
            // Añadir el precio con descuento al producto modificado
            productoModificado.precio_total = precioConDescuento;
            // Eliminar campos no deseados
            delete productoModificado.imagen_principal;
            delete productoModificado._id;
            delete productoModificado.quantity;
            delete productoModificado.descripcion;
            delete productoModificado.dimensiones;
            delete productoModificado.precio; // se le cmabia el nombre por "total"
            return productoModificado;
        });
    
        // Construir objeto pedido sin campos no deseados y con precio con descuento
        const pedido = {
            datosCliente: datosCliente,
            pedido: carritoModificado
        };
    
        crearPedido(pedido)
    };
    
    return (
        <div className="grid max-w-2xl mx-auto py-10 px-5 space-y-5 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:space-x-20">

            {/* Formulario */}
            <div className='order-2 lg:order-1'>
                <div className="p-5">
                    <form action="" onSubmit={enviarPedido} className="flex flex-col space-y-2">
                        <label htmlFor="" className='font-semibold'>Nombre</label>
                        <input type="text" onChange={(e) => setDatosCliente({...datosCliente, nombre: e.target.value})} value = {datosCliente.nombre} placeholder='nombre' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <label htmlFor="" className='font-semibold'>Apellido</label>
                        <input type="text" onChange={(e) => setDatosCliente({...datosCliente, apellido: e.target.value})} value = {datosCliente.apellido} placeholder='apellido' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <label htmlFor="" className='font-semibold'>Numero (whatsapp)</label>
                        <input type="text" onChange={(e) => setDatosCliente({...datosCliente, numero: e.target.value})} value = {datosCliente.numero} placeholder='numero' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <label htmlFor="" className='font-semibold'>Correo</label>
                        <input type="email" onChange={(e) => setDatosCliente({...datosCliente, correo: e.target.value})} value = {datosCliente.correo} placeholder='ejemplo@gmail.com' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <label htmlFor="" className='font-semibold'>Ciudad</label>
                        <input type="text" onChange={(e) => setDatosCliente({...datosCliente, ciudad: e.target.value})} value = {datosCliente.ciudad} placeholder='ciudad' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <label htmlFor="" className='font-semibold'>Direccion</label>
                        <input type="text" onChange={(e) => setDatosCliente({...datosCliente, direccion: e.target.value})} value = {datosCliente.direccion} placeholder='direccion' className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                        <button type='submit' className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-2 md:text-lg md:px-10">
                        Realizar pedido
                        </button>
                    </form>
                </div>
            </div>

            <div className='order-1 lg:order-2 space-y-5'>
                {/* Carrito de compras, Header */}
                <div className='flex justify-between border-b'>
                    <div>
                        <h1 className="text-2xl font-semibold mb-5">Resumen de compra</h1>
                    </div>
                    <div>
                        <button onClick={clearCart} className='text-red-400 font-semibold'>Vaciar carrito</button>
                    </div>
                </div>

                {/* Carrito de compras, Productos */}
                <div>
                    {cart.length === 0 ? (
                        <p>No hay productos en el carrito</p>
                    ) : (
                        <div className='space-y-5'>
                            <ul className='space-y-5'>
                                {cart.map((product, index) => (
                                    <li key={index} className=''>
                                        <ProductoCheckout props = {{
                                        imagen_principal: product.imagen_principal,
                                        nombre_producto: product.nombre_producto,
                                        material: product.material,
                                        cantidad: product.quantity,
                                        precio: product.precio,
                                        descuento: product.descuento,
                                        index: index,
                                        }}> 

                                        <button onClick={() => removeFromCart(index)}>X</button>
                                        </ProductoCheckout>
                                    </li>
                                ))}
                            </ul>
                            <div className='flex justify-between border-t py-5'>
                                <h3 className='font-semibold'>Subtotal</h3>
                                <p className='text-lg text-emerald-500 font-semibold'>{precioTotal}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}
