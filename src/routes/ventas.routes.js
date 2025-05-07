import { Router } from 'express';
import { obtenerVentasConDetalles, obtenerVentas, eliminarVenta, registrarVenta, actualizarVenta, obtenerVentaPorId } from '../controllers/ventas.controller.js';

const router = Router();

// Ruta para obtener todos las ventas
router.get('/ventas', obtenerVentasConDetalles);

//Ruta para obtener ventas 
router.get('/obtenerventas', obtenerVentas);

//Ruta para obtener ventas por ID
router.get('/obtenerventaporid/:id_venta', obtenerVentaPorId);

// Ruta para eliminar una venta
router.delete('/eliminarventa/:id_venta', eliminarVenta);

// Ruta para registrar una nueva venta
router.post('/registrarventa', registrarVenta);

// Ruta para actualizar una venta
router.patch('/actualizarventa/:id_venta', actualizarVenta);

export default router;