import { pool } from '../../db_conection.js';

// Obtener todas las Usuario
export const obtenerUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM usuarios');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener un cliente por su ID
export const obtenerUsuario = async (req, res) => {
    try {
        const id_usuario = req.params.id_usuario;
        const [result] = await pool.query('SELECT * FROM Usuarios WHERE id_usuario= ? ', [id_usuario]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de los empleados.'
        });
    }
};

// Eliminar un usuario por su ID
export const eliminarUsuario = async (req, res) => {
  try {
    const { id_usuario } = req.params;

    const [result] = await pool.query(
      "DELETE FROM usuarios WHERE id_usuario = ?",
      [id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró el usuario con ese ID" });
    }

    return res.json({ mensaje: "Usuario eliminado correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar el usuario", error: error.message });
  }
};


// Actualizar parcialmente un usuario por su ID
export const actualizarUsuarioPatch = async (req, res) => {
  try {
    const { id_usuario } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE usuarios SET ? WHERE id_usuario = ?',
      [datos, id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Usuario con ID ${id_usuario} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Usuario con ID ${id_usuario} actualizado correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar el usuario.',
      error
    });
  }
};