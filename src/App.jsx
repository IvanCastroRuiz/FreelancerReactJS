import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Layout
import Layout from './Layout/Layout';
//componentes
import Servicios from './components/Servicios';
import Formulario from './components/Formulario';
import Main from './components/Main';
import './App.css';
import '../src/asset/css/normalize.css'
import '../src/asset/css/custom.css'
import '../src/asset/css/styles.css'

function App() {


  return (
    <>
      <Router>
        <Routes>
            {/* Rutas Publicas */}
            <Route exact path="/" element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="servicios" element={<Servicios/>} />
                <Route path="contactos" element={<Formulario/>} />
            </Route>
        </Routes>  
      </Router>              
    </>
  );
}

export default App;