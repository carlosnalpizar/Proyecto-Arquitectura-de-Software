
import { usePacientes } from '../context/PacientesContexto'
import '../cssComponents/CardPersona.css'

const CardPaciente = ({ iteracion }) => {

    const {BorrarPaciente} = usePacientes()

    return (
    <div className="card-persona">
        <div>
            <p><strong>Cédula:</strong> {iteracion.Cedula}</p>
            <p><strong>Nombre:</strong> {iteracion.Nombre}</p>
            <p><strong>Apellido 1:</strong> {iteracion.Apellido1}</p>
            <p><strong>Apellido 2:</strong> {iteracion.Apellido2}</p>
            <p><strong>Fecha de Ingreso:</strong> {iteracion.Fecha_De_Ingreso}</p>
            <p><strong>Vendajes necesitados:</strong> {iteracion.Vendajes}</p>
            <p><strong>Asistencia Requerida:</strong> {iteracion.Tipo_De_Asistencia}</p>
            <button onClick={() => BorrarPaciente(iteracion.Cedula)} type="submit" className="delete-button">Borrar Paciente</button>
            <button type="submit" className="edit-button">Editar Paciente</button>
        </div>
    </div>
    )
}

export default CardPaciente