import { useState, useEffect } from 'react'
import Mensaje from './Message'
import CloseBtn from '../img/close.svg'

const Modal = ({
    setModal, 
    animateModal, 
    setAnimateModal, 
    configUpdate,
    config,
    setConfig
}) => {
    console.log("config-app:",config);
    const [message, setMessage] = useState('')
    const [basicFeeRate, setBasicFeeRate] = useState(Number(config.basicFeeRate))
    const [specialFeeRate, setSpecialFeeRate] = useState(Number(config.specialFeeRate))
    const [storageFee, setStorageFee] = useState(Number(config.storageFee))

    const closeModal = () => {
        setAnimateModal(false);
        setTimeout(() => {
            setModal(false);
        }, 500);            
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if([basicFeeRate, specialFeeRate, storageFee].includes('')){
            setMessage('All fields are required');

            setTimeout(() => {
                setMessage('');
            }, 3000);
            return;
        }

        configUpdate({basicFeeRate, specialFeeRate, storageFee});
    }

    return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img 
                src={CloseBtn}
                alt='close modal'
                onClick={closeModal}
            />
        </div>

        <form 
            onSubmit={handleSubmit}
            className={`formulario ${animateModal ? 'animar' : 'cerrar'}`}>
            <legend>{"Edit Config"}</legend>

            {
                message && 
                    <Mensaje
                        tipo="error"
                    >
                        {message}
                    </Mensaje>
            }

            <div className='campo'>
                <label htmlFor="basicFeeRate">Basic Fee Rate</label>
                <input
                    id="basicFeeRate"
                    type="number"
                    placeholder="Enter the basic fee rate. Eg: 10"
                    value={basicFeeRate}
                    onChange={e => setBasicFeeRate(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="specialFeeRate">Special Fee Rate</label>
                <input
                    id="specialFeeRate"
                    type="number"
                    placeholder="Enter the special fee rate. Eg: 2"
                    value={specialFeeRate}
                    onChange={e => setSpecialFeeRate(Number(e.target.value))}                    
                />
            </div>

            <div className='campo'>
                <label htmlFor="storageFee">Storage Fee</label>
                <input
                    id="storageFee"
                    type="number"
                    placeholder="Enter the storage fee. Eg: 100"
                    value={storageFee}
                    onChange={e => setStorageFee(Number(e.target.value))}                    
                />
            </div>            

            <input 
                type="submit"
                value="Save Changes"
            />
        </form>
    </div>
    )
}

export default Modal