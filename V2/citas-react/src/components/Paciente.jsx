
const Paciente = () =>
{
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Propietario: {''}
                <span className="font-normal normal-case">Juan</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">correo@correo.com</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">10 Dic 2022</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Síntoma: {''}
                <span className="font-normal normal-case">No come jhjh jjhj kjwss</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                >       
                    Editar             
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                >                 
                    Eliminar   
                </button>                
            </div>
        </div>
    )
}

export default Paciente