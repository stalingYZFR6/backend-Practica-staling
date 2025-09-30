import { pool } from '../../db_conection.js';

// Obtener todas las categorías
export const obtenerCategorias = async (req, res) => {
    try {
        const [result] = await pool.query('SELECT * FROM categorias');
        res.json(result);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos.',
            error: error
        });
    }
};

// Obtener una categoría por su ID
export const obtenerCategoria = async (req, res) => {
    try {
        const id_categoria = req.params.id_categoria;
        const [result] = await pool.query('SELECT * FROM Categorias WHERE id_categoria= ? ', [id_categoria]);
if (result.length <= 0) {
            return res.status(404).json({
                mensaje: `Error al leer los datos. ID ${id_categoria} no encontrado.`
            });
        }
        res.json(result[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al leer los datos de las categorias.',
            error: error
        });
    }
};


// Registrar una nueva Categoría
export const registrarCategoria = async (req, res) => {
    try {
        const { nombre_categoria, descripcion_categoria } = req.body;

        const [result] = await pool.query(
            'INSERT INTO categorias (nombre_categoria, descripcion_categoria) VALUES (?, ?)',
            [nombre_categoria, descripcion_categoria]
        );

        res.status(201).json({ id_categoria: result.insertId });
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ha ocurrido un error al registrar la categoría.',
            error: error
        });
    }
};

// Eliminar una categoría por su ID
export const eliminarCategoria = async (req, res) => {
  try {
    const { id_categoria } = req.params;

    const [result] = await pool.query(
      "DELETE FROM categorias WHERE id_categoria = ?",
      [id_categoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ mensaje: "No se encontró la categoría con ese ID" });
    }

    return res.json({ mensaje: "Categoría eliminada correctamente" });

  } catch (error) {
    return res.status(500).json({ mensaje: "Error al eliminar la categoría", error: error.message });
  }
};

// Actualizar parcialmente una categoría por su ID
export const actualizarCategoriaPatch = async (req, res) => {
  try {
    const { id_categoria } = req.params;
    const datos = req.body;

    const [result] = await pool.query(
      'UPDATE categorias SET ? WHERE id_categoria = ?',
      [datos, id_categoria]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        mensaje: `Categoría con ID ${id_categoria} no encontrada.`
      });
    }

    res.status(200).json({
      mensaje: `Categoría con ID ${id_categoria} actualizada correctamente.`
    });
  } catch (error) {
    res.status(500).json({
      mensaje: 'Error al actualizar la categoría.',
      error
    });
  }
};
