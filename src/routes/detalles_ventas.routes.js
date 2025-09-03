import { Router } from 'express';
import { obtenerDetalles_Ventas } from '../controllers/detalles_ventas.controller.js';

const router = Router();

// Ruta para obtener detalles_ventas
router.get('/detalles_ventas', obtenerDetalles_Ventas);

export default router;