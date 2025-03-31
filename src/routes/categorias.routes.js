import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todos las categorias
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su ID
router.get('/categoria/:id', obtenerCategoria);

// Ruta para registrar las categorias
router.post('/registrarcategoria', registrarCategoria);


export default router;