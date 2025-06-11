import { Router } from 'express';
import { obtenerEmpleados, registrarEmpleado, eliminarEmpleado, actualizarEmpleado } from '../controllers/empleados.controller.js';

const router = Router();

// Ruta para obtener todos las categorias
router.get('/obtenerempleados', obtenerEmpleados);

// Ruta para registrar las categorias
router.post('/registrarempleado', registrarEmpleado);

router.delete('/eliminarempleado/:id', eliminarEmpleado);

router.patch('/actualizarempleado/:id', actualizarEmpleado);


export default router;