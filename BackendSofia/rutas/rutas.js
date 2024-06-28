import { Router } from "express";
import controladoresLeer from "../controladores/controladoresLeer.js";
import controladoresInsertar from '../controladores/controladoresInsertar.js'
import controladoresBorrar from '../controladores/controladoresBorrar.js'
import conttroladoresActualizar from '../controladores/controladoresActualizar.js'


const router = Router()


router.get('/pacientes', controladoresLeer.leerPacientes)
router.get('/enfermeras', controladoresLeer.leerSecretarias)
router.get('/historial', controladoresLeer.leerHistorial)
router.get('/pacientes/:id/historial', controladoresLeer.leerunHistorial)
router.get('/turnos', controladoresLeer.obtenerTurnos)
router.post('/pacientes/:pacienteId/historial', controladoresInsertar.insertarHistorial);
router.post('/insertar/paciente', controladoresInsertar.insertarPacientes)
router.post('/turnos', controladoresInsertar.agregarTurno);
router.delete('/borrar/pacientes/:id', controladoresBorrar.borrarPaciente)
router.delete('/turnos/:id', controladoresBorrar.borrarTurno);
router.put('/editar/pacientes/:id', conttroladoresActualizar.editarPaciente)
router.put('/editar/turno/:id', conttroladoresActualizar.editarTurno)





export default router