import { Router } from 'express';
import { obtenerDetallesCompras, registrarDetalleCompra, obtenerDetallesCompra, eliminarDetalleCompra, actualizarDetalleCompraPatch } from '../controllers/detalles_compras.controllers.js';

const router = Router();

// Ruta para obtener todos los clientes
router.get('/detalles_compras', obtenerDetallesCompras);

// Ruta para obtener un cliente por su id
router.get('/detalles_compras/:id_detalle_compra', obtenerDetallesCompra);

// Ruta para registarr 
router.post("/registrardetalle", registrarDetalleCompra);

// Ruta para eliminar un detalle de compra por su ID
router.delete('/eliminar_detallecompra/:id_detalle_compra', eliminarDetalleCompra);

// Ruta para actualizar parcialmente un detalle de compra por su ID
router.patch('/detalles_compras/:id_detalle_compra', actualizarDetalleCompraPatch);


export default router;