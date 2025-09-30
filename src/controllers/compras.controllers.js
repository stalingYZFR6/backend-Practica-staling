import { pool } from '../../db_conection.js';

// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM compras');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerCompra = async (req, res) => {
    try {
        const id_compra = req.params.id_compra;
        const [result] = await pool.query('SELECT * FROM Compras WHERE id_compra= ? ', [id_compra]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_compra} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los compra.'
        });
    }
};

// Registrar una nueva Categoría
export const registrarCompra= async (req, res) => {
    try {
        const {
        id_empleado,
        fecha_compra,
        total_compra
            
        } = req.body;

        const [result] = await pool.query(
            'INSERT INTO compras (id_empleado, fecha_compra, total_compra) VALUES (?, ?, ?)',
            [
                id_empleado,
                fecha_compra,
                total_compra
            ]
        );

        res.status(201).json({ id_compra: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la compra.',
            error: error
        });
    }
};

// Eliminar una compra por su ID
export const eliminarCompra = async (req, res) => {
  try {
    const { id_compra } = req.params;

    const [result] = await pool.query(
      "DELETE FROM compra WHERE id_compra = ?",
      [id_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró la compra con ese ID" });
    }

    return res.json({ mensaje: "Compra eliminada correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar la compra", error: error.message });
  }
};


// Actualizar parcialmente una compra por su ID
export const actualizarCompraPatch = async (req, res) => {
  try {
    const { id_compra } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE compras SET ? WHERE id_compra = ?',
      [datos, id_compra]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Compra con ID ${id_compra} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `Compra con ID ${id_compra} actualizada correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar la compra.',
      error
    });
  }
};