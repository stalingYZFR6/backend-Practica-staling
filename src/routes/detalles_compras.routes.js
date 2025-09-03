import { Router } from 'express';
import { obtenerDetalles_Compras } from '../controllers/detalles_compras.controller.js';

const router = Router();

// Ruta para obtener todos los dettalles_copras
router.get('/Detalles_compras', obtenerDetalles_Compras);

export default router;