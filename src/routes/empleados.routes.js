import { Router } from 'express';
import { obtenerEmpleados, registrarEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

// Ruta para obtener todos las categorias
router.get('/obtenerempleados', obtenerEmpleados);

// Ruta para registrar las categorias
router.post('/registrarempleado', registrarEmpleado);


export default router;