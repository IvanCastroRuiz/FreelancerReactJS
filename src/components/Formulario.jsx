import { useState } from 'react';
import Alerta from './Alerta';

const Formulario = () => {

  const [ nombre, setNombre ] = useState("");
  const [ telefono, setTelefono ] = useState("");
  const [ correo, setCorreo ] = useState("");
  const [ mensaje, setMensaje ] = useState("");
  
  const [ alerta, setAlerta ] = useState({});

  const handleSubmit = (e)  =>{
    e.preventDefault()
    if([nombre,telefono,correo,mensaje].includes('')){
        setAlerta({
                    msg: "Todos los Campos son Obligatorios",
                    error: true
                  });
        return;
    };

    setAlerta({
                msg: "Enviando Informacion"
              });        

  };

  const { msg } = alerta;

  { 
    setTimeout(() => {
        setAlerta({});
    }, 3000)          
  }

  return (
    <>
        <section>   
            <h2>Contactos</h2>

            <form 
                className="formulario"
                onSubmit={handleSubmit}
            >

                <fieldset>
                    <legend>Contactenos llenado todos los campos</legend>
                    <div className="contenedor-campos">
                        <div className="campos">
                            <label>Nombre</label> 
                            <input 
                                id="nombre" 
                                name="nombre" 
                                type="text" 
                                placeholder="Tu nombre" 
                                className="input-text"
                                value={nombre} 
                                onChange={ e => setNombre(e.target.value) } 
                            />
                        </div>
                        <div className="campos">
                            <label>Telefono</label>
                            <input id="telefono" type="tel" placeholder="Tu telefono" className="input-text"
                                value={telefono} 
                                onChange={ e => setTelefono(e.target.value) }
                            />
                        </div>
                        <div className="campos">
                            <label>Correo</label>
                            <input id="correo" type="email" placeholder="Tu Email" className="input-text" 
                                value={correo} 
                                onChange={ e => setCorreo(e.target.value) }
                            />
                        </div>
                        <div className="campos">
                            <label>Mensaje</label>
                            <textarea id="mensaje" name="mensaje" className="input-text"
                                value={mensaje} 
                                onChange={ e => setMensaje(e.target.value) }
                            ></textarea>
                        </div>
                    </div>    

                    <div className="alinear-derecha flex">
                        <input className="boton w-100" type="submit" value="Enviar" />
                    </div>
                </fieldset>

                { msg &&  <Alerta 
                            alerta={alerta}
                          />
                }   
            
            </form>

        </section>
    </>
  )
}

export default Formulario