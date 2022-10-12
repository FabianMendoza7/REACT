import { useState, useEffect } from 'react'
import Error from './Error'

const Formulario = ({ pacientes, setPacientes }) =>
{
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);
    const generarId = () => {
        const random = Math.random().toString(36).substring(2);
        const fecha = Date.now().toString(36);

        return random + fecha;
    }

    const reiniciarForm = () =>
    {
        setNombre('');
        setPropietario('');
        setEmail('');
        setFecha('');
        setSintomas('');
    }

    const handleSubmit = (e) =>
    {
        e.preventDefault();

        // Validación del formulario.
        if ([nombre, propietario, email, fecha, sintomas].includes(''))
        {
            setError(true);
            return;
        }

        setError(false);

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
            id: generarId()
        }
        
        setPacientes([...pacientes, objetoPaciente]);

        // Reiniciar el form.
        reiniciarForm();
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Adminístralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded-lg py-10 px-15 mb-10">
                <div className="mb-5 ml-5 mr-5">
                    {
                        error && 
                        <Error><p>Todos los campos son obligatorios</p></Error>
                    }
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeHolder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5 ml-5 mr-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Nombre Propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeHolder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5 ml-5 mr-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeHolder="Email Contacto Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5 ml-5 mr-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5 ml-5 mr-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Alta
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                        placeHolder="Describe los Síntomas"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="Agregar Paciente"
                />
            </form>
        </div>
    )
}

export default Formulario