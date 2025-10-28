import { Router } from 'express';
import { obtenerUsuarios, registrarUsuario, obtenerUsuario, eliminarUsuario, actualizarUsuarioPatch } from '../controllers/usuarios.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/usuarios', obtenerUsuarios);

// Ruta para obtener un cliente por su id
router.get('/usuarios/:id_usuarios', obtenerUsuario);

// Registrar un nuevo usuario
router.post('/registrarusuario', registrarUsuario);

// Ruta para eliminar un usuario por su ID
router.delete('/eliminarusuario/:id_usuario', eliminarUsuario);

// Ruta para actualizar parcialmente un usuario por su ID
router.patch('/usuarios/:id_usuario', actualizarUsuarioPatch);

export default router;