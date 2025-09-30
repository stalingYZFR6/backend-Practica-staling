import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra, actualizarCompraPatch } from '../controllers/compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/compras', obtenerCompras);

// Ruta para obtener una compra por su id
router.get('/compras/:id_compra', obtenerCompra);

// Ruta para registrar una nueva compra
router.get('/registrarcompra', registrarCompra);

// Ruta para eliminar una compra por su ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

// Ruta para actualizar parcialmente una compra por su ID
router.patch('/compras/:id_compra', actualizarCompraPatch);


export default router;