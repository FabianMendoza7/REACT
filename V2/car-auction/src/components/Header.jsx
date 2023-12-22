import ControlBudget from './ControlBudget'
import NewBudget from './NewBudget'

const Header = ({
  config,
  setConfig,
  budget, 
  setBudget,
  isValidBudget,
  setIsValidBudget,
  setLoading
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
              setLoading={setLoading}
            />
          :
            <NewBudget 
              budget={budget}
              setBudget={setBudget}
              setIsValidBudget={setIsValidBudget}
              setLoading={setLoading}
            />
        }

    </header>
  )
}

export default Header