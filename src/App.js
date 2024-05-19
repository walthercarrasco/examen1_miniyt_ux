import './App.css';
import "./coso.css";
import "./shorts.css";
import BarraBusqueda from './components/organisms/BarraBusqueda';
import BarraLateral from './components/organisms/BarraLateral';
import BarraRecomendaciones from './components/organisms/BarraRecomendaciones';
import ContinuarViendo from './components/organisms/continuar';
import Recomendaciones from './components/organisms/recomendaciones';
import MiMix from './components/organisms/mimix';
import Shorts from './components/organisms/shorts';

function App() {
  return (
    <div className="App">
      <BarraBusqueda/>
      <BarraLateral/>
      <BarraRecomendaciones/>
      <div className="Videos">
        <ContinuarViendo/>
        <Recomendaciones/>
        <MiMix/>
        <Shorts/>  
      </div>
    </div>
  );
}

export default App;
