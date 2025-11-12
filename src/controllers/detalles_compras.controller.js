import { pool } from "../../db_conection.js";

// Obtener todas las categorías
export const obtenerDetallesCompras = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detalles_compras');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una detalles_compra por su ID
export const obtenerDetalleCompra = async (req, res) => {
  try {
    const id_detalle_compra = req.params.id_detalle_compra
    const [result] = await pool.query('SELECT * FROM detalles_compras WHERE id_detalle_compra = ?', [id_detalle_compra]);
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_detalle_compra} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los detalles_compras.'
    });
  }
};

// Registrar una nueva DetalleCompra
export const registrarDetalleCompra = async (req, res) => {
  try {
    const { id_compra, id_producto, cantidad, precio_unitario } = req.body;
    const [result] = await pool.query(
      'INSERT INTO detalles_compras (id_compra, id_producto, cantidad, precio_unitario) VALUES (?, ?, ?, ?)',
      [id_compra, id_producto, cantidad, precio_unitario]
    );
    res.status(201).json({ id_detalle_compra: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el deatalle_compra.',
      error: error
    });
  }
};

export const eliminarDetalleCompra = async (req, res) => {
  try {
    const id_detalle_compra = req.params.id_detalle_compra;
    const [result] = await pool.query(
      'DELETE FROM detalles_compras WHERE id_detalle_compra = ?',
      [id_detalle_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:'Error al eliminar los detallescompras. El ID ${id_detalle_compra} no fue encontrado.'
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar los detallescompras.',
      error: error
    });
  }
};

// Actualizar un Detalle_Compra
export const actualizarDetalleCompraPatch = async (req, res) => {
  try {
    const {id_detalle_compra} = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE detalles_compras SET ? WHERE id_detalle_compra = ?',
      [datos, id_detalle_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar. ID ${id_detalle_compra} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Detalle_Compra con ID ${id_detalle_compra} actualizada correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar detalle_compra.',
      error: error
    });
  }
};