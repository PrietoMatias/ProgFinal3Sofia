import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants.js';
import EditarTurno from './EditarTurno';

const MainTurnos = () => {
    const [turnos, setTurnos] = useState([]);
    const [turnoSeleccionado, setTurnoSeleccionado] = useState(null);

    const getTurnos = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/turnos`);
            setTurnos(response.data);
        } catch (error) {
            console.error('Error al obtener turnos:', error);
        }
    };

    const handleEditarTurno = (turno) => {
        setTurnoSeleccionado(turno);
    };

    const handleCerrarEdicion = () => {
        setTurnoSeleccionado(null);
    };

    const handleDeleteTurno = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/turnos/${id}`);
            setTurnos(turnos.filter(turno => turno._id !== id));
        } catch (error) {
            console.error('Error al borrar turno:', error);
        }
    };

    useEffect(() => {
        getTurnos();
    }, []);

    return (
        <div className="container">
            <h2>Turnos Disponibles</h2>
            {turnoSeleccionado ? (
                <EditarTurno turno={turnoSeleccionado} onClose={handleCerrarEdicion} />
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre Completo</th>
                            <th>Email</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {turnos.length > 0 ? (
                            turnos.map(turno => (
                                <tr key={turno._id}>
                                    <td>{turno.nombre}</td>
                                    <td>{turno.mail}</td>
                                    <td>{turno.fecha}</td>
                                    <td>{turno.hora}</td>
                                    <td>
                                        <button onClick={() => handleEditarTurno(turno)}>Editar</button>
                                        <button onClick={() => handleDeleteTurno(turno._id)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No hay turnos disponibles</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default MainTurnos;
