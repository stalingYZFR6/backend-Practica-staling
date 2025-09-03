import { pool } from '../../db_conection.js';


// Obtener todas las Detalles_ventas
export const obtenerDetalles_Ventas = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Detalles_Ventas');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos.',
      error: error
    });
  }
};