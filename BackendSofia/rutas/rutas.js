import { Router } from "express";
import controladoresLeer from "../controladores/controladoresLeer.js";
import controladoresInsertar from '../controladores/controladoresInsertar.js'


const router = Router()


router.get('/pacientes', controladoresLeer.leerPacientes)
router.get('/enfermeras', controladoresLeer.leerSecretarias)
router.get('/historial', controladoresLeer.leerHistorial)
router.get('/pacientes/:id/historial', controladoresLeer.leerunHistorial)
router.post('/pacientes/:pacienteId/historial', controladoresInsertar.insertarHistorial);
router.post('/insertar/paciente', controladoresInsertar.insertarPacientes)




export default router