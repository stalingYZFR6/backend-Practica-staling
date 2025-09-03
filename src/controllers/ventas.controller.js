import { pool } from '../../db_conection.js';


// Obtener todas las Ventas
export const obtenerVentas= async (req, res) => {
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