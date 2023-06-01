import { useState } from 'react'

import './App.css'
import Tarjeta from './Components/Tarjeta'
import Formulario from './Components/Formulario'

function App() {

  const [pref, setPref] = useState({
    name:'',
    favBand:''
  })

  const [mostrar, setMostrar] = useState(false)

  const  [error, setError] = useState(false)

  const handleSubmit = (e) => { e.preventDefault()
    if(pref.name.trim().length >= 3 && pref.favBand.trim().length >= 6)
    {
      setMostrar(true)
      setError(false)
    }
    else {
      setMostrar(false)
      setError(true)
    }
  }


  return (
    <>

        <div>
        <Formulario handleSubmit={handleSubmit} setPref={setPref}/>
      { mostrar  && <Tarjeta pref={pref}/> } 
      {error &&  <h3>Por favor chequea que la información sea correcta. </h3>}
      </div>


    </>
  )
}

export default App
