import { pool } from '../../db_conection.js';

// Obtener todas las DetallesVenta
export const obtenerDetallesVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Detalles_ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
  }
};

// Registrar un nuevo detalle de venta
export const registrarDetalleVenta = async (req, res) => {
  try {
    const { id_venta, id_producto, cantidad, precio_unitario } = req.body;

    // Validación básica
    if (!id_venta || !id_producto || !cantidad || !precio_unitario) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios: id_venta, id_producto, cantidad, precio_unitario."
      });
    }

    const [result] = await pool.query(
      "INSERT INTO Detalles_Ventas (id_venta, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)",
      [id_venta, id_producto, cantidad, precio_unitario]
    );

    res.status(201).json({
      mensaje: "Detalle de venta registrado correctamente.",
      id_detalle_venta: result.insertId
    });

  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al registrar el detalle de venta.",
      error: error.message
    });
  }
};

// Obtener datalles compra por su ID
export const obtenerDetallesVenta = async (req, res) => {
    try {
        const id_detalle_venta = req.params.id_detalle_venta;
        const [result] = await pool.query('SELECT * FROM Detalles_ventas WHERE id_detalle_venta= ? ', [id_detalle_venta]);
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

// Eliminar un detalle de venta por su ID
export const eliminarDetalleVenta = async (req, res) => {
  try {
    const { id_detalle_venta } = req.params;

    const [result] = await pool.query(
      "DELETE FROM Detalles_ventas WHERE id_detalle_venta = ?",
      [id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró el detalle de venta con ese ID" });
    }

    return res.json({ mensaje: "Detalle de venta eliminado correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar el detalle de venta", error: error.message });
  }
};

// Actualizar parcialmente un detalle de venta por su ID
export const actualizarDetalleVentaPatch = async (req, res) => {
  try {
    const { id_detalle_venta } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE Detalles_ventas SET ? WHERE id_detalle_venta = ?',
      [datos, id_detalle_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Detalle de venta con ID ${id_detalle_venta} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Detalle de venta con ID ${id_detalle_venta} actualizado correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar el detalle de venta.',
      error
    });
  }
};