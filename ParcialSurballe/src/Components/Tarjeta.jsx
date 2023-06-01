import React from 'react'

const Tarjeta = ({pref}) => {

return (
    <div className='tarjeta'>
        <h2>Hola!  {pref.name} </h2>
        <h2>Tremenda banda:  {pref.favBand}</h2>

    </div>
    
)
}

export default Tarjeta