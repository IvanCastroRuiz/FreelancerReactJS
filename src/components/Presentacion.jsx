
const Presentacion = ({estado,grupo,entidadEducativa}) => {
  return (
    <div>
        { estado && ( // Operador ternario
        <>
          <h1> Bienvenidos:  {grupo} al Curso de ReactJS</h1>
          <h1> SENA Convenio - {entidadEducativa} </h1>
        </>  
      ) }
    </div>
  )
}

export default Presentacion