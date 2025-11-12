import { pool } from "../../db_conection.js";

// Obtener todas las categorías
export const obtenerDetallesVentas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detalles_ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una categoría por su ID
export const obtenerDetalleVenta = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta
    const [result] = await pool.query('SELECT * FROM detalles_ventas WHERE id_detalle_venta = ?', [id_detalle_venta]);
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_venta} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles_venta.'
    });
  }
};

// Registrar una nueva DetalleCompra
export const registrarDetalleVenta = async (req, res) => {
  try {
    const { id_venta, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      'INSERT INTO detalles_ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
      [id_venta, id_producto, cantidad, precio_unitario]
    );
    res.status(201).json({ id_detalle_venta: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el deatalle_venta.',
      error: error
    });
  }
};

export const eliminarDetalleVenta = async (req, res) => {
  try {
    const id_detalle_venta = req.params.id_detalle_venta;
    const [result] = await pool.query(
      'DELETE FROM detalles_ventas WHERE id_detalle_venta = ?',
      [id_categoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:'Error al eliminar detalles_ventas. El ID ${id_detalle_venta} no fue encontrado.'
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar detalles_ventas.',
      error: error
    });
  }
};

// Actualizar una Detalle_Venta
export const actualizarDetalleVentaPatch = async (req, res) => {
  try {
    const {id_detalle_venta} = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE detalles_ventas SET ? WHERE id_detalle_venta = ?',
      [datos, id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar. ID ${id_detalle_venta} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `DetalleVenta con ID ${id_detalle_venta} actualizada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar detalle_venta.',
      error: error
    });
  }
};