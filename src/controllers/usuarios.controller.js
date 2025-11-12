import { pool } from "../../db_conection.js";

// Obtener todas las categorías
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

// Obtener una categoría por su ID
export const obtenerUsuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario
    const [result] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [id_usuario]);
    if (result.length <= 0) {
      return res.status(404).json({
        mensaje: `Error al leer los datos. ID ${id_usuario} no encontrado.`
      });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de los usuarios.'
    });
  }
};

// Registrar un nuevo Usuario
export const registrarUsuario = async (req, res) => {
  try {
    const { usuario, contraseña } = req.body;
    const [result] = await pool.query(
      'INSERT INTO usuarios (usuario, contraseña) VALUES (?, ?)',
      [usuario, contraseña]
    );
    res.status(201).json({ id_usuario: result.insertId });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al registrar el empleado.',
      error: error
    });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    const id_usuario = req.params.id_usuario;
    const [result] = await pool.query(
      'DELETE FROM usuarios WHERE id_usuario = ?',
      [id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje:'Error al eliminar los usuarios. El ID ${id_usuario} no fue encontrado.'
      });
    }

    // Respuesta sin contenido para indicar éxito
    res.status(204).send();
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al eliminar el usuario.',
      error: error
    });
  }
};

// Actualizar un Usuario
export const actualizarUsuarioPatch = async (req, res) => {
  try {
    const {id_usuario} = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE usuarios SET ? WHERE id_usuario = ?',
      [datos, id_usuario]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Error al actualizar. ID ${id_usuario} no encontrado.`
      });
    }

    res.status(200).json({
      mensaje: `Usuario con ID ${id_usuario} actualizado correctamente.`
    });
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al actualizar el usuario.',
      error: error
    });
  }
};