import { pool } from "../../db_conection.js";

// Obtener todas las categorías
export const obtenerProductos = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM productos');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};

// Obtener una categoría por su ID
export const obtenerProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto
    const [result] = await pool.query('SELECT * FROM productos WHERE id_producto = ?', [id_producto]);
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los producto.'
    });
  }
};

// Registrar un nuevo Producto
export const registrarProducto = async (req, res) => {
  try {
    const { nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock } = req.body;
    const [result] = await pool.query(
      'INSERT INTO productos (nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock) VALUES (?, ?, ?, ?, ?)',
      [nombre_producto, descripcion_producto, id_categoria, precio_unitario, stock]
    );
    res.status(201).json({ id_producto: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el producto.',
      error: error
    });
  }
};

export const eliminarProducto = async (req, res) => {
  try {
    const id_producto = req.params.id_producto;
    const [result] = await pool.query(
      'DELETE FROM productos WHERE id_producto = ?',
      [id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:'Error al eliminar el producto. El ID ${id_producto} no fue encontrado.'
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el producto.',
      error: error
    });
  }
};

// Actualizar un Producto
export const actualizarProductoPatch = async (req, res) => {
  try {
    const {id_producto} = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE productos SET ? WHERE id_producto = ?',
      [datos, id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar. ID ${id_producto} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Producto con ID ${id_producto} actualizado correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar los productos.',
      error: error
    });
  }
};