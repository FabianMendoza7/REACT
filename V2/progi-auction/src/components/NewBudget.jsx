import {useState} from 'react'
import Message from './Message'
import {maxVehicleAmountConfig} from './../../config.js'

const NewBudget = ({
  budget,
  setBudget,
  setIsValidBudget,
  setLoading
}) => {
  const [message, setMessage] = useState('');

  const handleBudget = (e) =>{
    e.preventDefault();

    if(!budget || budget < 0){
      setMessage('Not a valid budget');
      setIsValidBudget(false);
      return;
    }

    if(budget > maxVehicleAmountConfig){
      setMessage(`the budget must not exceed ${maxVehicleAmountConfig}`);
      setIsValidBudget(false);
      return;
    }    
    
    setLoading(true);
    setMessage('');
    setIsValidBudget(true);
  }

  return (
    <div className="contenedor-budget contenedor sombra">     
      <form onSubmit={handleBudget} className='formulario' noValidate>
        <div className="campo">
          <label>
            Define Budget
          </label>
          <input
            className="nuevo-budget"
            type="number"
            step={0.01}
            min={1}
            max={maxVehicleAmountConfig}            
            placeholder="Enter your Budget"
            value={budget}
            onChange={e => setBudget(e.target.value)}
          />
        </div>

        <input
          id="btnSimulate"
          type="submit"
          value="Simulate"
        />
        
        {
          message && 
          <Message 
            type="error">
            {message}
          </Message>
        }     
      </form>        
    </div>
  )
}

export default NewBudget