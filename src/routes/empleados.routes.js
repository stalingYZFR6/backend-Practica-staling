import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, eliminarEmpleado } from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleados', obtenerEmpleados);

// Ruta para obtener un cliente por su id
router.get('/empleados/:id_empleados', obtenerEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);


export default router;