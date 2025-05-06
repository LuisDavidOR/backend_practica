import { Router } from 'express';
import {  obtenerProductos, obtenerProducto, registrarProducto, eliminarProducto, actualizarProducto } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/obtenerproductos', obtenerProductos);

// Ruta para obtener un produto por su ID
router.get('/producto/:id', obtenerProducto);

// Ruta para Registrar un produto
router.post('/registrarproducto', registrarProducto);

// Ruta para eliminar un produto por id
router.delete('/eliminarproducto/:id', eliminarProducto);

// Ruta para actualizar un produto por id
router.patch('/actualizarproducto/:id', actualizarProducto);

export default router;