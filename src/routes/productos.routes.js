import { Router } from 'express';
import {  obtenerProductos, obtenerProducto, registrarProducto } from '../controllers/productos.controller.js';

const router = Router();

// Ruta para obtener todos los productos
router.get('/obtenerproductos', obtenerProductos);

// Ruta para obtener un produto por su ID
router.get('/producto/:id', obtenerProducto);

// Ruta para Registrar un produto
router.post('/registrarproducto', registrarProducto);

export default router;