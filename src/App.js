import './App.css';
import {Ingreso} from './componentes/pages/Ingreso';
import { Registro } from './componentes/pages/Registro'
import {
  BrowserRouter,
  Routes,
  Route
  } from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Ingreso />} />
          <Route path='/registro' element={<Registro />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
