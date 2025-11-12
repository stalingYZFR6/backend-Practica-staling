import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetalleCompra, registrarDetalleCompra, eliminarDetalleCompra, actualizarDetalleCompraPatch } from '../controllers/detalles_compras.controller.js';

const router = Router();

router.get('/detallescompras', obtenerDetallesCompras);

// Ruta para orbtener una categoria por su ID
router.get('/detalle_compra/:id_detalle_compra', obtenerDetalleCompra);

// Rutas para registrar un detallecompra
router.post('/registrarDetalleCompra', registrarDetalleCompra);

// Ruta para eliminar un detalle_copra por su ID
router.delete('/eliminardetalles_compras/:id_detalle_compra', eliminarDetalleCompra);

router.patch("/actualizarDeatlleCompraiaPatch/:id_detalle_compra", actualizarDetalleCompraPatch);

// Rutas
export default router;