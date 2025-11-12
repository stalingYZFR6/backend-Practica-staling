import { Router } from 'express';
import { obtenerClientes, obtenerCliente, registrarCliente, eliminarCliente, actualizarClientePatch } from '../controllers/clientes.controller.js';

const router = Router();

router.get('/clientes', obtenerClientes);

// Ruta para orbtener una categoria por su ID
router.get('/cliente/:id_cliente', obtenerCliente);

// Rutas para registrar una categoria
router.post('/registrarCliente', registrarCliente);

// Ruta para eliminar un cliente por su ID
router.delete('/eliminarcliente/:id_cliente', eliminarCliente);

router.patch("/actualizarClientePatch/:id_cliente", actualizarClientePatch);

// Rutas
export default router;