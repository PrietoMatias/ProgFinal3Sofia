import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from '../constants/constants.js';
import Historial from "./Historial.jsx";

const MainHome = () => {
    const [datos, setDatos] = useState([]);
    const [historial, setHistorial] = useState([]);
    const [showHistorial, setShowHistorial] = useState(false);
    const [paciente_id, setPaciente_id] = useState('')

    // Función para obtener la lista de pacientes desde la API
    const getPacientes = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/pacientes`);
            setDatos(response.data);
        } catch (error) {
            console.error('Error al obtener pacientes:', error);
        }
    };

    // Función para obtener el historial de un paciente específico
    const getHistorial = async (pacienteId) => {
        try {
            const response = await axios.get(`${BASE_URL}/pacientes/${pacienteId}/historial`);
            setHistorial(response.data);
            console.log(response.data)
            setShowHistorial(true);
            setPaciente_id(pacienteId)
        } catch (error) {
            console.error('Error al obtener el historial del paciente:', error);
        }
    };

    useEffect(() => {
        getPacientes();
    }, []);

    return (
        <div className="container">
            {!showHistorial ? (
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Edad</th>
                            <th>Teléfono</th>
                            <th>Mail</th>
                            <th>Acciones</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {datos.length > 0 ? (
                            datos.map(d => (
                                <tr key={d._id}>
                                    <td>{d.nombre}</td>
                                    <td>{d.apellido}</td>
                                    <td>{d.edad}</td>
                                    <td>{d.telefono}</td>
                                    <td>{d.mail}</td>
                                    <td>
                                        <button onClick={() => getHistorial(d._id)}>Historial</button>
                                    </td>
                                    <td><button>Editar</button></td>
                                    <td><button>Eliminar</button></td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7">No hay Pacientes por ahora</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            ) : (
                <Historial historial={historial} setShowHistorial={setShowHistorial} paciente_id={paciente_id}/>
            )}
        </div>
    );
};

export default MainHome;
