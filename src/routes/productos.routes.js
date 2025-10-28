import { Router } from 'express';
import { obtenerProductos, obtenerProducto, eliminarProducto, actualizarProductoPatch } from '../controllers/productos.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/productos', obtenerProductos);

// Registrar un nuevo producto
router.post("/registrarproducto", registrarProducto);

// Ruta para obtener un cliente por su id
router.get('/productos/:id_productos', obtenerProducto);

// Ruta para eliminar un producto por su ID
router.delete('/eliminarproducto/:id_producto', eliminarProducto);

// Ruta para actualizar parcialmente un producto por su ID
router.patch('/productos/:id_producto', actualizarProductoPatch);


export default router;