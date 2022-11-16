import React from 'react'
import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

const Header = ({
  config,
  setConfig,
  budget, 
  setBudget,
  isValidBudget,
  setIsValidBudget
}) => {
  return (
    <header>
        <h1>Auction Car Simulator</h1>

        {
          isValidBudget ? 
            <ControlBudget
              config={config} 
              setConfig={setConfig}
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
          :
            <NewBudget 
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
            />
        }
    </header>
  )
}

export default Header