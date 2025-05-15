import { Router } from 'express';
import { totalVentasPorDia, totalVentasPorMes, totalVentasPorAnio, totalVentasPorEmpleado,
  cantidadVentasPorEmpleado, totalVentasPorEmpleadoMes, totalVentasPorClientes, totalComprasPorClientes,
  totalComprasPorClientesMes, ProductosMasVendidosPorValorTotal, ProductosVendidosPorMes, TotalVentasPorCategorias,
  TotalVentasPorCategoriasMes, ProductosBajoStock, stockPorCategoria, totalVentasPorClienteEmpleadoMes,
  totalVentasPorCategoriaEmpleadoMes, totalVentasPorCategoriaClienteMes, promedioVentasPorEmpleado,
  promedioVentasPorEmpleadoMes, ClientesFrecuentes, ClientesFrecuentesPorMes, ProductosMasCompradosPorClientes,
  categoriasMasCompradasPorClientes, totalVentasPorDiaSemana, totalVentasPorCategoriaDiaSemana,
  productosMayorRotacion, categoriasMayorRotacion } from '../controllers/estadisticas.controller.js';

const router = Router();

router.get('/categoriasmayorrotacion', categoriasMayorRotacion);

router.get('/productosmayorrotacion', productosMayorRotacion);

router.get('/totalventasporcategoriadiasemana', totalVentasPorCategoriaDiaSemana);

router.get('/totalventaspordiasemana', totalVentasPorDiaSemana);

router.get('/categoriasmascompradasporclientes', categoriasMasCompradasPorClientes);

router.get('/productosmascompradosporclientes', ProductosMasCompradosPorClientes);

router.get('/clientesfrecuentespormes', ClientesFrecuentesPorMes);

router.get('/clientesfrecuentes', ClientesFrecuentes);

router.get('/promedioventasporempleadomes', promedioVentasPorEmpleadoMes);

router.get('/promedioventasporempleado', promedioVentasPorEmpleado);

router.get('/totalventasporcategoriaclientemes', totalVentasPorCategoriaClienteMes);

router.get('/totalventasporcategoriaempleadomes', totalVentasPorCategoriaEmpleadoMes);

router.get('/totalventasporclienteempleadomes', totalVentasPorClienteEmpleadoMes);

router.get('/totalventaspordia', totalVentasPorDia);

router.get('/totalventaspormes', totalVentasPorMes);

router.get('/totalventasporanio', totalVentasPorAnio);

router.get('/totalventasporempleado', totalVentasPorEmpleado);

router.get('/cantidadventasporempleado', cantidadVentasPorEmpleado);

router.get('/totalventasporempleadomes', totalVentasPorEmpleadoMes);

router.get('/totalventasporclientes', totalVentasPorClientes);

router.get('/totalcomprasporclientes', totalComprasPorClientes);

router.get('/totalcomprasporclientesmes', totalComprasPorClientesMes);

router.get('/productosmasvendidosporvalortotal', ProductosMasVendidosPorValorTotal);

router.get('/productosvendidospormes', ProductosVendidosPorMes);

router.get('/totalventasporcategorias', TotalVentasPorCategorias);

router.get('/totalventasporcategoriasmes', TotalVentasPorCategoriasMes);

router.get('/productosbajostock', ProductosBajoStock);

router.get('/stockporcategoria', stockPorCategoria);



export default router;