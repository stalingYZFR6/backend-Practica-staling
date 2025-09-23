import { Router } from 'express';
import { obtenerProductos, obtenerProducto, eliminarProducto } from '../controllers/productos.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/productos', obtenerProductos);

// Ruta para obtener un cliente por su id
router.get('/productos/:id_productos', obtenerProducto);

// Ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);


export default router;