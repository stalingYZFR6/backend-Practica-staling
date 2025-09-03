import { pool } from '../../db_conection.js';


// Obtener todas las compras
export const obtenerCompras = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Compras');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
}; 