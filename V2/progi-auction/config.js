const maxVehicleAmountConfig = 1000000
const feesConfig = {
    basicFeeRate: 10,
    specialFeeRate: 2,
    storageFee: 100,
    associationFeeObject: [
        {
            value: 5,
            minAmount: 1,
            maxAmount: 500
        },
        {
            value: 10,
            minAmount: 501,
            maxAmount: 1000
        },
        {
            value: 15,
            minAmount: 1001,
            maxAmount: 3000
        },
        {
            value: 20,
            minAmount: 3001,
            maxAmount: maxVehicleAmountConfig
        }
    ]
}

export {
    maxVehicleAmountConfig,
    feesConfig
}