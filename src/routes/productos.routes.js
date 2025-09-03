import { Router } from 'express';
import { obtenerProductos } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', obtenerProductos);

export default router;