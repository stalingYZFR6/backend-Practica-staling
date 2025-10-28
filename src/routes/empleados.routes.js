import { Router } from 'express';
import { obtenerEmpleados, obtenerEmpleado, eliminarEmpleado, actualizarEmpleadoPatch } from '../controllers/empleados.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/empleados', obtenerEmpleados);

// Registrar un nuevo empleado
router.post("/registrarempleado", registrarEmpleado);

// Ruta para obtener un cliente por su id
router.get('/empleados/:id_empleados', obtenerEmpleado);

// Ruta para eliminar un empleado por su ID
router.delete('/eliminarempleado/:id_empleado', eliminarEmpleado);

// Ruta para actualizar parcialmente un empleado por su ID
router.patch('/empleados/:id_empleado', actualizarEmpleadoPatch);


export default router;