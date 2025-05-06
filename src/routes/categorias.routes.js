import { Router } from 'express';
import { obtenerCategorias, obtenerCategoria, registrarCategoria, eliminarCategoria, actualizarCategoria } from '../controllers/categorias.controller.js';

const router = Router();

// Ruta para obtener todos las categorias
router.get('/categorias', obtenerCategorias);

// Ruta para obtener una categoria por su ID
router.get('/categoria/:id', obtenerCategoria);

// Ruta para registrar las categorias
router.post('/registrarcategoria', registrarCategoria);

//Ruta para eliminar una categoria por su id
router.delete('/eliminarcategoria/:id', eliminarCategoria);

//Ruta para actualizar una categoria por su id
router.patch('/actualizarcategoria/:id', actualizarCategoria);


export default router;