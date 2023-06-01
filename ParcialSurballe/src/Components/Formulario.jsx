import React from 'react'

const Formulario = ({setPref, handleSubmit}) => {
return (
    
    <div>
    <form onSubmit={handleSubmit}>
    <label>Ingresa tu nombre</label>
    <input type="text" onChange={(e) => setPref ((prevPref) => ({...prevPref ,name: e.target.value}))}/>

    <label>Ingresa tu banda preferida</label>
    <input type="text" onChange={(e) => setPref ((prevPref) => ({...prevPref ,favBand: e.target.value}))}/>
        
    <button>submit</button>
    </form>
        </div>
        
)
}

export default Formulario