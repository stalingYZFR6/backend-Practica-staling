import { Router } from 'express';
import { obtenerDetallesVentas, obtenerDetallesVenta, eliminarDetalleVenta, actualizarDetalleVentaPatch } from '../controllers/detalles_ventas.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_ventas', obtenerDetallesVentas);

// Ruta para obtener un cliente por su id
router.get('/detalles_ventas/:id_detalle_venta', obtenerDetallesVenta);


// Ruta para eliminar un detalle de venta por su ID
router.delete('/eliminar_detalleventa/:id_detalle_venta', eliminarDetalleVenta);

// Ruta para actualizar parcialmente un detalle de venta por su ID
router.patch('/detalles_ventas/:id_detalle_venta', actualizarDetalleVentaPatch);

export default router;