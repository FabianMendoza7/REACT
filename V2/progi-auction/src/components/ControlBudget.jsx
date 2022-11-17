import { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { feesConfig } from './../../config.js'
import 'react-circular-progressbar/dist/styles.css'

const ControlBudget = ({
    config, 
    setConfig,
    budget,
    setBudget,
    setIsValidBudget,
    setLoading
}) => {
    const [percentage, setPercentage] = useState(0)
    const [vehicleAmount, setVehicleAmount] = useState(0)
    const [basicFee, setBasicFee] = useState(0)
    const [specialFee, setSpecialFee] = useState(0)
    const [associationFee, setAssociationFee] = useState(0)
    const [storageFee, setStorageFee] = useState(0)

    useEffect(() => {
        async function simulateAuction(){
            const increment = 0.01;
            const lots = parseInt((budget <= 1000 ? 1 : budget / 1000) * 3)
            let start = budget < 120 ? increment : 1
            let end = parseInt(budget / lots)
            let itemsLot = end
            let promises = []

            for(let lot = 1; lot <= lots; lot++){
                promises.push(CalculateVehicleAmount(start, end, increment, lot))
                start = end + increment;
                end = lots == lot + 1 ? budget : end + itemsLot;
            }

            const dataSimulator = await Promise.all(promises);

            if(!dataSimulator){
                // There is no data.
                return
            }

            let result = dataSimulator.find(x => x.priority == 1);

            if(!result){
                const minSum = Math.max(...dataSimulator.map(o => Object.keys(o).length > 0 && o.sum))
                result = dataSimulator.find(x => x.sum == minSum);
            }

            setVehicleAmount(result.vehicleAmount ?? 0)
            setBasicFee(result.basicFee ?? 0)
            setSpecialFee(result.specialFee ?? 0)
            setAssociationFee(result.associationFee ?? 0)
            setStorageFee(result.storageFee ?? 0)
            setPercentage(result.percentage ?? 0)
        }

        simulateAuction();
    }, [budget])

    const CalculateVehicleAmount = async (start, end, increment, lot) => {
        let {basicFeeRate, specialFeeRate, associationFeeObject, storageFee: storageFeeSim} = config
        let vehicleAmountSim = start
        let lastVehicleAmountSim = 0

        while(vehicleAmountSim <= end){
            let basicFeeSim = calculateBasicFee(vehicleAmountSim, basicFeeRate)
            let specialFeeSim = calculateSpecialFee(vehicleAmountSim, specialFeeRate)
            let associationFeeSim = calculateAssociationFee(vehicleAmountSim, associationFeeObject)
            const sum = parseFloat((vehicleAmountSim + basicFeeSim + specialFeeSim + associationFeeSim + storageFeeSim).toFixed(2))

            if(sum >= budget){
                const amountSim = budget == sum ? vehicleAmountSim : lastVehicleAmountSim
                const percentageSim = (((amountSim) / budget ) * 100).toFixed(2)

                if(sum > budget){
                    // Recalculate.
                    basicFeeSim = calculateBasicFee(amountSim, basicFeeRate)
                    specialFeeSim = calculateSpecialFee(amountSim, specialFeeRate)
                    associationFeeSim = calculateAssociationFee(amountSim, associationFeeObject)
                }

                // TODO: validate this rule (?).
                storageFeeSim = amountSim == 0 ? 0 : storageFeeSim

                const dataSimulator = {
                    lot,
                    start, 
                    end,
                    sum,
                    priority: sum == budget ? 1 : 2,
                    vehicleAmount: amountSim,
                    basicFee: basicFeeSim,
                    specialFee: specialFeeSim,
                    associationFee: associationFeeSim,
                    storageFee: storageFeeSim,
                    percentage: percentageSim
                }

                return dataSimulator
            }

            lastVehicleAmountSim = vehicleAmountSim
            vehicleAmountSim = parseFloat((vehicleAmountSim + increment).toFixed(2))
        }
        return {}
    }

    const calculateBasicFee = (vehicleAmount, basicFeeRate) => {
        const grossBasicFeeRate = vehicleAmount * (basicFeeRate / 100)
        return parseFloat((grossBasicFeeRate == 0 ? 0 : (grossBasicFeeRate < 10 ? 10 : (grossBasicFeeRate > 50 ? 50 : grossBasicFeeRate))).toFixed(2))
    }

    const calculateSpecialFee = (vehicleAmount, specialFeeRate) => {
        return parseFloat((vehicleAmount * (specialFeeRate / 100)).toFixed(2))
    }

    const calculateAssociationFee = (vehicleAmount, associationFeeObject) => {
        if(vehicleAmount < 1){
            return 0
        }

        //TODO: Review this functionality:
        //const fee = associationFeeObject.find(amount => vehicleAmount >= amount.minAmount && vehicleAmount <= amount.maxAmount).value
        let fee = 0
        if(vehicleAmount >= 1 && vehicleAmount <= 500){
            fee = 5
        } else if(vehicleAmount > 500 && vehicleAmount <= 1000){
            fee = 10
        } else if(vehicleAmount > 1000 && vehicleAmount <= 3000){
            fee = 15
        } else {
            fee = 20
        }

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
                    <span>Max vehicle amount: </span> {formatAmount(vehicleAmount)}
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