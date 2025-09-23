import { pool } from '../../db_conection.js';

// Obtener todas las Ventas
export const obtenerVentas = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM Ventas');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerVenta = async (req, res) => {
    try {
        const id_ventas = req.params.id_venta;
        const [result] = await pool.query('SELECT * FROM ventas WHERE id_venta= ? ', [id_ventas]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_ventas} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};

// Eliminar una venta por su ID
export const eliminarVenta = async (req, res) => {
  try {
    const { id_venta } = req.params;

    const [result] = await pool.query(
      "DELETE FROM venta WHERE id_venta = ?",
      [id_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró la venta con ese ID" });
    }

    return res.json({ mensaje: "Venta eliminada correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar la venta", error: error.message });
  }
};
