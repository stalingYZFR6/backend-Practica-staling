import { Router } from 'express';
import { obtenerVentas, obtenerVenta, eliminarVenta, actualizarVentaPatch } from '../controllers/ventas.controllers.js';

const router = Router();

// Ruta para obtener todos las ventas 
router.get('/ventas', obtenerVentas);

// Registrar una nueva venta
router.post("/registrarventa", registrarVenta);


// Ruta para obtener un cliente por su id
router.get('/ventas/:id_ventas', obtenerVenta);

// Ruta para eliminar una venta por su ID
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para actualizar parcialmente una venta por su ID
router.patch('/ventas/:id_venta', actualizarVentaPatch);

export default router;