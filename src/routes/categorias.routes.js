import { Router } from 'express';
import { obtenerCategorias } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todos los categorias
router.get('/categorias', obtenerCategorias);

export default router;