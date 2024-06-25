import { MongoClient, ObjectId} from "mongodb";

const uri = 'mongodb+srv://gentsgentleman:1kAbOfVRshXpgs8X@clauster1.zfn7x48.mongodb.net/';

let cliente = null;
let administradores = null;
let historials = null;
let pacientes = null;
let secretarias = null;
let familiares = null;


export default class Datos {

    static async conectar() {
        if (cliente) return; // Verificar si ya está conectado
        cliente = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        try {
            await cliente.connect();
            administradores = cliente.db("clinicaDB").collection("administradores");
            historials = cliente.db('clinicaDB').collection('historials');
            pacientes = cliente.db('clinicaDB').collection('pacientes');
            secretarias = cliente.db('clinicaDB').collection('secretarias');
            familiares = cliente.db('clinicaDB').collection('familiares directos');
        } catch (error) {
            console.error('Error al conectar con la base de datos:', error);
            cliente = null;
            throw error;
        }
    }

    static async readPacientes() {
        await Datos.conectar();
        return await pacientes.find().toArray();
    }

    static async insertarPacientes(data) {
        await Datos.conectar();
        let resultado = await pacientes.insertOne(data);
        return { ...data, _id: resultado.insertedId };
    }

    static async updatePacientes(id, data) {
        await Datos.conectar();
        return await pacientes.updateOne(
            { _id: id },
            { $set: data }
        );
    }

    static async deletePacientes(id) {
        await Datos.conectar();
        return await pacientes.deleteOne({ _id: id });
    }

    static async readEnfermeras() {
        await Datos.conectar();
        return await secretarias.find().toArray();
    }

    static async insertarEnfermera(data) {
        await Datos.conectar();
        let resultado = await secretarias.insertOne(data);
        return { ...data, _id: resultado.insertedId };
    }

    static async updateEnfermeras(id, data) {
        await Datos.conectar();
        return await secretarias.updateOne(
            { _id: id },
            { $set: data }
        );
    }

    static async deleteEnfermera(id) {
        await Datos.conectar();
        return await secretarias.deleteOne({ _id: id });
    }
    static async readHistorial(pacienteId) {
        await Datos.conectar();
        return await historials.find({ paciente_id: new ObjectId(pacienteId) }).toArray();
    }
    static async insertarHistorial(paciente_id, data) {
        await Datos.conectar();
        const historialConPacienteId = { ...data, paciente_id: new ObjectId(paciente_id) };
        let resultado = await historials.insertOne(historialConPacienteId);
        return { ...historialConPacienteId, _id: resultado.insertedId };
    }

    static async updateHistorial(id, data) {
        await Datos.conectar();
        return await historials.updateOne(
            { _id: id },
            { $set: data }
        );
    }

    static async deleteHistorial(id) {
        await Datos.conectar();
        return await historials.deleteOne({ _id: id });
    }

    static async readFamiliares() {
        await Datos.conectar();
        return await familiares.find().toArray();
    }

    static async insertarFamiliares(data) {
        await Datos.conectar();
        let resultado = await familiares.insertOne(data);
        return { ...data, _id: resultado.insertedId };
    }

    static async updateFamiliares(id, data) {
        await Datos.conectar();
        return await familiares.updateOne(
            { _id: id },
            { $set: data }
        );
    }

    static async deleteFamiliares(id) {
        await Datos.conectar();
        return await familiares.deleteOne({ _id: id });
    }

    static async deleteAll() {
        await Datos.conectar();
        return await administradores.deleteMany({});
    }

    static async close() {
        if (cliente) {
            await cliente.close();
            cliente = null;
            administradores = null;
            historials = null;
            pacientes = null;
            secretarias = null;
            familiares = null;
        }
    }

}
