import { useState, useEffect } from 'react';

import Imagen from './Imagen'

const ConsultarApi = () => {

  const [ consulta, setConsulta ] = useState({});
  
  useEffect(() =>{
    const consultarApi = async () => {
        
        try {
            const respuesta = await fetch('https://picsum.photos/v2/list');
            const resultado = await respuesta.json();
            setConsulta(resultado);                
        } catch (error) {
            console.log(error);
        }
        
    };
    consultarApi();
  },[]);

  return (
    <div className="main">
        <h1 className="text-center text-3xl text-white my-10 font-bold uppercase">Consultando una api con useEffec, useState y Fetch</h1>
        { consulta.length > 0 ? 
            (
                <div className="container mx-auto mt-10  flex flex-wrap">     
                    {consulta.map( imagen => (
                                <Imagen 
                                    key={imagen.id}
                                    imagen={imagen}
                                />
                    ))}
                </div>
            )
            : 
                <div className="bg-white">
                    <p className="text-center text-3xl text-black my-10 font-bold uppercase">No Hay Resultados</p> 
                </div>
        }
    </div>
  )
}

export default ConsultarApi