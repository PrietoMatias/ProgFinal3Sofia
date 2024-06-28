import Datos from "../servicios/bd.js";


const leerPacientes = async (req,res)=>{
    try {
        const pacientes = await Datos.readPacientes()
        res.json(pacientes)
    } catch (error) {
        res.status(500).send(error)
    }
}
const leerSecretarias = async (req,res)=>{
    try {
        const enefemeras = await Datos.readEnfermeras()
        res.json(enefemeras)
    } catch (error) {
        res.status(500).send(error)
    }
}
const leerHistorial = async(req,res)=>{
    const {id} = req.body
    try {
        const historials = await Datos.readHistorial(id)
        res.json(historials)
    } catch (error) {
        res.status(500).send(error)
    }
}

const leerunHistorial = async(req,res)=>{
    const pacienteId = req.params.id;

    try {
        const historial = await Datos.readHistorial(pacienteId); 
        res.json(historial); 
    } catch (error) {
        console.error('Error al obtener el historial:', error);
        res.status(500).send('Error al obtener el historial del paciente');
    }
}
const obtenerTurnos = async (req, res) => {
    try {
        const turnos = await Datos.readTurnos();
        res.status(200).json(turnos);
    } catch (error) {
        console.error('Error al obtener turnos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};




export default {
    leerPacientes,
    leerSecretarias,
    leerHistorial,
    leerunHistorial,
    obtenerTurnos
}
