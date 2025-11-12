import { Router } from 'express';
import { eliminarVenta, obtenerVenta, obtenerVentas, registrarVenta, actualizarVentaPatch } from '../controllers/ventas.controller.js';

const router = Router();

//ruta para obtener todas las ventas
router.get('/ventas', obtenerVentas);

// Ruta para orbtener una venta por su ID
router.get('/venta/:id_venta', obtenerVenta);

// Rutas para registrar una venta
router.post('/registrarVenta', registrarVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

router.patch("/actualizarVentaPatch/:id_venta", actualizarVentaPatch);


// Rutas
export default router;