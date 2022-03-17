
const Alerta = ({alerta}) => {
  
    return (
      <div className={ ` ${ alerta.error ? 'error' : 'correcto'}`}>
        {alerta.msg}
      </div>
    )
  }
  
export default Alerta