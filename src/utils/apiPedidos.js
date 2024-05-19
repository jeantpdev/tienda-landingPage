import axios from 'axios';

export const crearPedido = async (datosPedido) => {

    try {
        const response = await axios.post('https://mongodb-productos.onrender.com/crear-pedido/', datosPedido);
        return response; // O puedes devolver cualquier otra cosa que necesites
    } catch (error) {
        throw new Error('Error al enviar el producto:', error);
    }
};