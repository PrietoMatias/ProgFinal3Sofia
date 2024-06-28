import Datos from "../servicios/bd.js";

const borrarPaciente = async (req, res) => {
    const id = req.params.id; // Cambiado para asegurar que se obtenga el id correcto
    try {
        const borrar = await Datos.deletePacientes(id); // Asegúrate de usar await
        res.status(201).json({ message: 'Paciente borrado con éxito', borrar });
    } catch (error) {
        console.error('Error al borrar paciente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}
const borrarTurno = async (req, res) => {
    const { id } = req.params;
    try {
        await Datos.deleteTurno(id);
        res.status(200).json({ mensaje: 'Turno borrado con éxito' });
    } catch (error) {
        console.error('Error al borrar turno:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default {borrarPaciente, borrarTurno}
