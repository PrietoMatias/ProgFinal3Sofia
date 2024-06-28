import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants.js';

const EditarTurno = ({ turno, onClose }) => {
    const [nombre, setNombreCompleto] = useState('');
    const [mail, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    useEffect(() => {
        if (turno) {
            setNombreCompleto(turno.nombre);
            setEmail(turno.mail);
            setFecha(turno.fecha);
            setHora(turno.hora);
        }
    }, [turno]);

    const handleActualizarTurno = async (e) => {
        e.preventDefault();
        try {
            const turnoActualizado = { nombre, mail, fecha, hora };
            await axios.put(`${BASE_URL}/editar/turno/${turno._id}`, turnoActualizado);
            onClose(); // Cierra el formulario después de editar
        } catch (error) {
            console.error('Error al actualizar el turno:', error);
        }
    };

    return (
        <form onSubmit={handleActualizarTurno}>
            <h2>Editar Turno</h2>
            <div>
                <label>Nombre Completo:</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombreCompleto(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={mail}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Fecha:</label>
                <input
                    type="date"
                    value={fecha}
                    onChange={(e) => setFecha(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Hora:</label>
                <input
                    type="time"
                    value={hora}
                    onChange={(e) => setHora(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Actualizar Turno</button>
            <button type="button" onClick={onClose}>Cancelar</button>
        </form>
    );
};

export default EditarTurno;
