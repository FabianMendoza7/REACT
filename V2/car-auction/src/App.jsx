import { useState, useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal';
import { feesConfig } from './../config'
import IconConfig from './img/edit-config.svg'
import Spinner from './components/Spinner';

function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [modal, setModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [config, setConfig] = useState(localStorage.getItem('config') ? JSON.parse(localStorage.getItem('config')) : feesConfig);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('config', JSON.stringify(config) ?? JSON.stringify(feesConfig));
  }, [config]);

  const handleSetConfig = () => {
    setModal(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 500);
  }

  const configUpdate = config => {
    setConfig(config);
    setAnimateModal(false);
    setTimeout(() => {
        setModal(false);
    }, 500);     
  }

  return (
    <div className={modal ? 'fijar' : ''}>
      <Header
        config={config}
        setConfig={setConfig}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        setLoading={setLoading}
      />
      <>
        {
          <div className="edit-config">
            <img
              src={IconConfig}
              alt="icon set config"
              onClick={handleSetConfig}
            />
          </div>
        }
      </>

      {
        modal &&
          <Modal 
            setModal={setModal}
            animateModal={animateModal}
            setAnimateModal={setAnimateModal}
            configUpdate={configUpdate}
            config={config}
          />
      }   

      {/* {
        loading && <Spinner />
      }*/}
    </div>
  )
}

export default App
