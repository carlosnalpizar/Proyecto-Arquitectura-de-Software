import { Route, Routes } from 'react-router-dom'
import './App.css';
// eslint-disable-next-line no-unused-vars
import { PersContextoProveedor } from './context/PersonasContexto';
import Login from './pages/Login';
import RutasLoggeado from './componentes/RutasLoggeado';
import NotFound from './pages/NotFound';
import { PacientesContextoProveedor } from './context/PacientesContexto';
import { HabitacionesContextoProveedor } from './context/HabitacionesContexto';


function App() {
  return (
    <HabitacionesContextoProveedor>
      <PersContextoProveedor>
        <PacientesContextoProveedor>
          
          <Routes>
            <Route path="/home/*" element={<RutasLoggeado />}> </Route>
            <Route path="/" element={<Login />}> </Route>
            <Route path="*" element={<NotFound />}> </Route> 
          </Routes>
          
        </PacientesContextoProveedor>
      </PersContextoProveedor>
    </HabitacionesContextoProveedor>
  );
}

export default App;
