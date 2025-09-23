import { Router } from 'express';
import { obtenerDetallesCompras, obtenerDetallesCompra, eliminarDetalleCompra } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_compras', obtenerDetallesCompras);

// Ruta para obtener un cliente por su id
router.get('/detalles_compras/:id_detalle_compra', obtenerDetallesCompra);

// Ruta para eliminar un detalle de compra por su ID
router.delete('/eliminar_detallecompra/:id_detalle_compra', eliminarDetalleCompra);

export default router;