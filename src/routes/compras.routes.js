import { Router } from 'express';
import { obtenerCompras, obtenerCompra, registrarCompra, eliminarCompra, actualizarCompraPatch } from '../controllers/compras.controller.js';

const router = Router();

router.get('/compras', obtenerCompras);

// Ruta para orbtener una categoria por su ID
router.get('/compra/:id_compra', obtenerCompra);

// Rutas para registrar una categoria
router.post('/registrarCompra', registrarCompra);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcompra/:id_compra', eliminarCompra);

router.patch("/actualizarCompraPatch/:id_compra", actualizarCompraPatch);

// Rutas
export default router;