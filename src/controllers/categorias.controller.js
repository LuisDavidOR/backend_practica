import { pool } from '../db.js';

// Obtener todas las categorias
export const obtenerCategorias = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM Categorias');
    res.json(result);
  } catch (error) {
    return res.status(500).json({
      mensaje: 'Ha ocurrido un error al leer los datos de las categorias.',
      error: error
    });
  }
};

// Obtener una categoria por su ID
export const obtenerCategoria = async (req, res) => {
    try {
      const [result] = await pool.query('SELECT * FROM Categorias WHERE id_categoria = ?', [req.params.id]);
      
      if (result.length <= 0) {
        return res.status(404).json({
          mensaje: `Error al leer los datos. El ID ${req.params.id} de la categoria no fue encontrado.`
        });
      }
      res.json(result[0]);
    } catch (error) {
      return res.status(500).json({
        mensaje: 'Ha ocurrido un error al leer los datos de la categoria.'
      });
    }
  };