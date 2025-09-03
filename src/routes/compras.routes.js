import { Router } from 'express';
import { obtenerCompras } from '../controllers/compras.controller.js';

const router = Router();

// Ruta para obtener todos los compras
router.get('/compras', obtenerCompras);

export default router;