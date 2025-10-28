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


// Registrar una nueva venta
export const registrarVenta = async (req, res) => {
  try {
    const { id_cliente, id_empleado, total_venta } = req.body;

    // Validación básica
    if (!id_cliente || !id_empleado || !total_venta) {
      return res.status(400).json({
        mensaje: "Los campos id_cliente, id_empleado y total_venta son obligatorios."
      });
    }

    const [result] = await pool.query(
      `INSERT INTO Ventas (id_cliente, id_empleado, total_venta) VALUES (?, ?, ?)`,
      [id_cliente, id_empleado, total_venta]
    );

    res.status(201).json({
      mensaje: "Venta registrada correctamente.",
      id_venta: result.insertId
    });

  } catch (error) {
    return res.status(500).json({
      mensaje: "Error al registrar la venta.",
      error: error.message
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

// Actualizar parcialmente una venta por su ID
export const actualizarVentaPatch = async (req, res) => {
  try {
    const { id_venta } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE ventas SET ? WHERE id_venta = ?',
      [datos, id_venta]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Venta con ID ${id_venta} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `Venta con ID ${id_venta} actualizada correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar la venta.',
      error
    });
  }
};