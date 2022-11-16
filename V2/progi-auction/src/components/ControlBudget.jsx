import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { feesConfig } from './../../config.js'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({
    config, 
    setConfig,
    budget,
    setBudget,
    setIsValidBudget
}) => {
    const [percentage, setPercentage] = useState(0)
    const [vehicleAmount, setVehicleAmount] = useState(0)
    const [basicFee, setBasicFee] = useState(0)
    const [specialFee, setSpecialFee] = useState(0)
    const [associationFee, setAssociationFee] = useState(0)
    const [storageFee, setStorageFee] = useState(0)
    const [found, setFound] = useState(false)

    useEffect(() => {
        async function simulateAuction(){
            console.log("> budget:",budget)
            const increment = 0.01;
            let start1 = budget < 120 ? increment : 1;
            let end1 = parseFloat((budget / 3).toFixed(2));
            let start2 = end1 + increment;
            let end2 = parseFloat((end1 * 2).toFixed(2));
            let start3 = end2 + increment;
            let end3 = budget;

            await Promise.all([
                CalculateVehicleAmount(start1, end1, increment, "A"), 
                CalculateVehicleAmount(start2, end2, increment, "B"),
                CalculateVehicleAmount(start3, end3, increment, "C")
            ]);
        }
        simulateAuction();

        //CalculateVehicleAmount(budget < 120 ? increment : 1, budget, 0.01);
    }, [budget])

    const CalculateVehicleAmount = async (vehicleAmountSim, end, increment, type) => {
        const {basicFeeRate, specialFeeRate, associationFeeObject, storageFee: storageFeeSim} = config
        let lastVehicleAmountSim = 0

        while(vehicleAmountSim <= end && !found){
            const grossBasicFeeRate = vehicleAmountSim * (basicFeeRate / 100)
            const basicFeeSim = calculateBasicFee(grossBasicFeeRate)
            const specialFeeSim = calculateSpecialFee(vehicleAmountSim, specialFeeRate)
            const associationFeeSim = calculateAssociationFee(vehicleAmountSim, associationFeeObject)
            const sum = parseFloat((vehicleAmountSim + basicFeeSim + specialFeeSim + associationFeeSim + storageFeeSim).toFixed(2))
            console.log(`Sum-${type}:`, sum);

            if(sum >= budget && !found){
                const amount = budget == sum ? vehicleAmountSim : lastVehicleAmountSim
                const newPercentage = (((amount) / budget ) * 100).toFixed(2)

                setVehicleAmount(amount)
                setBasicFee(basicFeeSim)
                setSpecialFee(specialFeeSim)
                setAssociationFee(associationFeeSim)
                setStorageFee(storageFeeSim)
                setFound(true)
                setPercentage(newPercentage)

                console.log("***********************************");
                console.log("* vehicleAmountSim: ", vehicleAmountSim);
                console.log("* lastVehicleAmountSim: ", lastVehicleAmountSim);
                console.log("* final amount: ", amount);
                console.log("***********************************");

                return
            }

            lastVehicleAmountSim = vehicleAmountSim
            vehicleAmountSim = parseFloat((vehicleAmountSim + increment).toFixed(2))
        }
    }

    const calculateBasicFee = (grossBasicFeeRate) => {
        return parseFloat((grossBasicFeeRate < 10 ? 10 : (grossBasicFeeRate > 50 ? 50 : grossBasicFeeRate)).toFixed(2))
    }

    const calculateSpecialFee = (vehicleAmount, specialFeeRate) => {
        return parseFloat((vehicleAmount * (specialFeeRate / 100)).toFixed(2))
    }

    const calculateAssociationFee = (vehicleAmount, associationFeeObject) => {
        if(vehicleAmount < 1){
            return 0
        }

        const fee = associationFeeObject.find(amount => vehicleAmount >= amount.minAmount && vehicleAmount <= amount.maxAmount).value
        return parseFloat(fee.toFixed(2))
    }

    const formatAmount = (cantidad) => {
        return cantidad.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
        const resultado = confirm('Do you want to restart the simulator?');

        if(resultado){
            setConfig(feesConfig)
            setBudget(0)
            setIsValidBudget(false)
            setFound(false)
        }
    }

    return (
        <div className="contenedor-budget contenedor sombra dos-columnas">
            <div>
                <CircularProgressbar 
                    styles={buildStyles({
                        pathColor: percentage > 0 ? '#DC2626' : '#3B82F6',
                        trailColor: '#F5F5F5',
                        textColor: percentage > 0 ? '#DC2626' : '#3B82F6'
                    })}
                    value={percentage}
                    text={`${percentage}% Allowed`}
                />
            </div>

            <div className="contenido-budget">
                <button
                    className='reset-app'
                    type='button'
                    onClick={handleResetApp}
                >
                    Reset Simulator
                </button>
                <p>
                    <span>Budget: </span> {formatAmount(budget)}
                </p>
                <p>
                    <span>Maximum vehicle amount: </span> {formatAmount(vehicleAmount)}
                </p>                
                <p>
                    <span>Basic fee: </span> {formatAmount(basicFee)}
                </p>
                <p>
                    <span>Special fee: </span> {formatAmount(specialFee)}
                </p>
                <p>
                    <span>Association fee: </span> {formatAmount(associationFee)}
                </p>
                <p>
                    <span>Storage fee: </span> {formatAmount(storageFee)}
                </p>                
            </div>                     
        </div>
    )
}

export default ControlBudget