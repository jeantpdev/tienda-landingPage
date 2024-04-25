import React, { useState, useEffect } from 'react';
import ProductoCheckout from './componentes-checkout/ProductoCheckout';

export default function Carrito() {
    const [cart, setCart] = useState([]);

    console.log(cart)

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); // Eliminar el producto en el índice dado
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const clearCart = () => {
        setCart([]);
        localStorage.removeItem('cart');
    };

    return (
        <div className="max-w-2xl mx-auto py-10 px-5 space-y-5">

            {/* Formulario */}
            <div className="p-5">
                <form action="" className="flex flex-col space-y-2">
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />


                    <label htmlFor="">Apellido</label>
                    <input type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />


                    <label htmlFor="">Numero (whatsapp)</label>
                    <input type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />


                    <label htmlFor="">Ciudad</label>
                    <input type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                    <label htmlFor="">Direccion</label>
                    <input type="text" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm" />

                </form>
            </div>
            {/* Carrito de compras, Header */}
            <div className='flex justify-between'>
                <div>
                    <h1 className="text-2xl font-semibold mb-5">Carrito de compras</h1>
                </div>
                <div>
                    <button onClick={clearCart}>Vaciar carrito</button>
                </div>
            </div>

            {/* Carrito de compras, Productos */}
            <div>
                {cart.length === 0 ? (
                    <p>No hay productos en el carrito</p>
                ) : (
                    <div>
                        <ul className='space-y-5'>
                            {cart.map((product, index) => (
                                <li key={index} className=''>
                                    <ProductoCheckout props = {{
                                    imagen_principal: product.imagen_principal,
                                    nombre_producto: product.nombre_producto,
                                    material: product.material,
                                    cantidad: product.quantity,
                                    precio: product.precio,
                                    index: index,
                                    }}> 

                                    <button onClick={() => removeFromCart(index)}>X</button>
                                    </ProductoCheckout>

                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div>
    );
}
