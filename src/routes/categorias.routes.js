import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoriaPatch   } from '../controllers/categorias.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su id
router.get('/categoria/:id_categoria', obtenerCategoria);

// Ruta para registrar una nueva categoria
router.get('/registrarcategoria', registrarCategoria);

// Ruta para eliminar una categoría por su ID
router.delete('/eliminarcategoria/:id_categoria', eliminarCategoria);

// Ruta para actualizar parcialmente una categoría por su ID
router.patch('/categorias/:id_categoria', actualizarCategoriaPatch);


export default router;