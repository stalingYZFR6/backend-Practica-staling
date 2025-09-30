import { pool } from '../../db_conection.js';

// Obtener todas las empleados
export const obtenerEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM empleados');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerEmpleado = async (req, res) => {
    try {
        const id_empleados = req.params.id_empleados;
        const [result] = await pool.query('SELECT * FROM Empleados WHERE id_empleados= ? ', [id_empleados]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_empleados} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};

// Eliminar un empleado por su ID
export const eliminarEmpleado = async (req, res) => {
  try {
    const { id_empleado } = req.params;

    const [result] = await pool.query(
      "DELETE FROM empleado WHERE id_empleado = ?",
      [id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró el empleado con ese ID" });
    }

    return res.json({ mensaje: "Empleado eliminado correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar el empleado", error: error.message });
  }
};

// Actualizar parcialmente un empleado por su ID
export const actualizarEmpleadoPatch = async (req, res) => {
  try {
    const { id_empleado } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE empleados SET ? WHERE id_empleado = ?',
      [datos, id_empleado]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Empleado con ID ${id_empleado} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Empleado con ID ${id_empleado} actualizado correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar el empleado.',
      error
    });
  }
};