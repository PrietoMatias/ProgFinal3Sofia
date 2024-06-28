import Datos from "../servicios/bd.js";

const editarPaciente = async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const resultado = await Datos.updatePacientes(id, data);
        if (resultado.matchedCount === 0) {
            return res.status(404).json({ error: 'Paciente no encontrado' });
        }
        res.status(200).json({ message: 'Paciente actualizado con éxito' });
    } catch (error) {
        console.error('Error al actualizar paciente:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
const editarTurno = async (req, res) => {
    const { id } = req.params;
    const { nombre, mail, fecha, hora } = req.body;
    try {
        const turnoActualizado = await Datos.updatePacientes(id, { nombre, mail, fecha, hora });
        res.status(200).json(turnoActualizado);
    } catch (error) {
        console.error('Error al actualizar turno:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
}

export default {editarPaciente, editarTurno};
