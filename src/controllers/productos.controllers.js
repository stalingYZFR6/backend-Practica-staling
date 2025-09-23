import { pool } from '../../db_conection.js';

// Obtener todas las Productos
export const obtenerProductos = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Productos');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerProducto = async (req, res) => {
    try {
        const id_producto = req.params.id_producto;
        const [result] = await pool.query('SELECT * FROM Productos WHERE id_producto= ? ', [id_producto]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_producto} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};

// Eliminar un producto por su ID
export const eliminarProducto = async (req, res) => {
  try {
    const { id_producto } = req.params;

    const [result] = await pool.query(
      "DELETE FROM producto WHERE id_producto = ?",
      [id_producto]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró el producto con ese ID" });
    }

    return res.json({ mensaje: "Producto eliminado correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar el producto", error: error.message });
  }
};
