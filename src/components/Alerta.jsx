
const Alerta = ({alerta}) => {
  
    setTimeout(() => {
      setAlerta({});
    }, 3000)    

    return (
      <div className={ ` ${ alerta.error ? 'error' : 'correcto'}`}>
        {alerta.msg}
      </div>
    )
}
  
export default Alerta