import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

export default router;