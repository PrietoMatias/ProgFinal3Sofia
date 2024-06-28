import { useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../constants/constants.js';

const TurnoForm = ({ onTurnoAdded, setMostrarTurnos }) => {
    const [nombre, setNombre] = useState('');
    const [mail, setMail] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}/turnos`, { nombre, mail, fecha, hora });
            onTurnoAdded(response.data);
            setNombre('');
            setMail('');
            setFecha('');
            setHora('');
        } catch (error) {
            console.error('Error al asignar turno:', error);
        }
    };
    return (
        <>
        <form onSubmit={handleSubmit} className='container'>
            <div>
                <label>Nombre Completo:</label>
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)} required />
            </div>
            <div>
                <label>Fecha:</label>
                <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} required />
            </div>
            <div>
                <label>Hora:</label>
                <input type="time" value={hora} onChange={(e) => setHora(e.target.value)} required />
            </div>
            <button type="submit">Asignar Turno</button>
            <button onClick={()=>setMostrarTurnos(false)}>Regresar</button>
        </form>
        </>
    );
};

export default TurnoForm;
