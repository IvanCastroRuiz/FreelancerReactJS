import { Link } from "react-router-dom";

const Imagen = ({imagen}) => {

  const { download_url, author, url } = imagen;     

  return (
    
        <div className="w-1/2 md:w-1/3 lg:w-1/4 mb-4 p-3">
            <div className="bg-white">
                <img className="w-full" src={ imagen ? download_url :  "" } alt={imagen ? author : "" } />
                <div className="p-4">
                    <p className="card-text">Autor: {imagen ? author :"" }</p>
                    <Link to={imagen ? url : ""} 
                    rel="noopener noreferrer" 
                    target="_blank" className="bg-blue-800 w-full p-1 block mt-5 rounded text-center font-bold uppercase hover:bg-blue-500 text-white">Ver Imagen</Link>
                </div>   
            </div>
        </div>
  )
}

export default Imagen