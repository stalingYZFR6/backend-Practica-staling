import { Router } from 'express';
import { eliminarDetalleVenta, obtenerDetallesVentas, obtenerDetalleVenta, registrarDetalleVenta, actualizarDetalleVentaPatch} from '../controllers/detalles_ventas.controller.js';

const router = Router();

router.get('/detallesventas', obtenerDetallesVentas);

// Ruta para orbtener una categoria por su ID
router.get('/detalle_venta/:id_detalle_venta', obtenerDetalleVenta);

// Rutas para registrar una detalleventa
router.post('/registrarDetalleVenta', registrarDetalleVenta);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminardetalles_ventas/:id_detalle_venta', eliminarDetalleVenta);

router.patch("/actualizarDetalleVentaPatch/:id_detalle_venta", actualizarDetalleVentaPatch);

// Rutas
export default router;