import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants.js";

const EditPaciente = ({ paciente, setShowEdit, getPacientes }) => {
    const [datos, setDatos] = useState({
        nombre: paciente.nombre,
        apellido: paciente.apellido,
        edad: paciente.edad,
        telefono: paciente.telefono,
        mail: paciente.mail,
        obrasocial: paciente.obrasocial,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatos({ ...datos, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${BASE_URL}/editar/pacientes/${paciente._id}`, datos);
            getPacientes(); // Actualizar la lista de pacientes después de la edición
            setShowEdit(false); // Cerrar el formulario de edición
        } catch (error) {
            console.error('Error al actualizar paciente:', error);
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" name="nombre" value={datos.nombre} onChange={handleChange} />
                <label htmlFor="apellido">Apellido</label>
                <input type="text" name="apellido" value={datos.apellido} onChange={handleChange} />
                <label htmlFor="edad">Edad</label>
                <input type="number" name="edad" value={datos.edad} onChange={handleChange} />
                <label htmlFor="telefono">Teléfono</label>
                <input type="text" name="telefono" value={datos.telefono} onChange={handleChange} />
                <label htmlFor="mail">Mail</label>
                <input type="text" name="mail" value={datos.mail} onChange={handleChange} />
                <label htmlFor="obrasocial">Obra Social</label>
                <input type="text" name="obrasocial" value={datos.obrasocial} onChange={handleChange} />
                <button type="submit" className="btn color green">Guardar Cambios</button>
                <button onClick={() => setShowEdit(false)} className='btn color yellow'>Cancelar</button>
            </form>
        </div>
    );
};

export default EditPaciente;
