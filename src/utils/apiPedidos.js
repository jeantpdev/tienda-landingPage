import axios from 'axios';

export const crearPedido = async (datosPedido) => {

    console.log(datosPedido)

    try {
        const response = await axios.post('http://127.0.0.1:5900/crear-pedido/', datosPedido);
        return response; // O puedes devolver cualquier otra cosa que necesites
    } catch (error) {
        throw new Error('Error al enviar el producto:', error);
    }
};