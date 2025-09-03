import { Router } from 'express';
import { obtenerVentas } from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para obtener todos los Ventas
router.get('/ventas', obtenerVentas);

export default router;