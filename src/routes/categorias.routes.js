import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria,eliminarCategoria, actualizarCategoriaPatch } from '../controllers/categorias.controller.js';

const router = Router();

router.get('/categorias', obtenerCategorias);

// Ruta para orbtener una categoria por su ID
router.get('/categoria/:id_categoria', obtenerCategoria);

// Rutas para registrar una categoria
router.post('/registrarCategoria', registrarCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

router.patch("/actualizarCategoriaPatch/:id_categoria", actualizarCategoriaPatch);


// Rutas
export default router;