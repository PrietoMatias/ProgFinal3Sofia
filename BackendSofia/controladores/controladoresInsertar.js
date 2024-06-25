import Datos from "../servicios/bd.js"

const insertarHistorial = async (req, res) => {
    const { pacienteId } = req.params;
    const data = req.body;
    console.log(data)
    try {
        const historial = await Datos.insertarHistorial(pacienteId, data);
        res.status(201).json(historial);
    } catch (error) {
        console.error('Error al insertar historial:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
const insertarPacientes = async (req,res)=>{
    const data = req.body
    console.log(data)
    try {
        const pacientes = await Datos.insertarPacientes(data)
        res.status(201).json(pacientes)
    } catch (error) {
        console.error('Error al insertar paciente', error)
        res.status(500).json({error: 'Error interno del servidor'})
    }
}



export default {insertarHistorial, insertarPacientes}