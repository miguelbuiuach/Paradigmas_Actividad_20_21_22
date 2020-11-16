import Parrafo from './components/Parrafo'
import Contador from './components/Contador'
import User from './components/User'
import Foco from './components/Foco'

function App() {
  return (
    <div>
    <h1>Actividad 21 Focos</h1>
    <Foco lugar = "sala"></Foco>
    <Foco lugar = "comedor"></Foco>
    <Foco lugar = "cocina"></Foco>
    <Foco lugar = "estancia"></Foco>
    <Foco lugar = "recamara principal"></Foco>
    <Foco lugar = "recamara de los niños"></Foco>
    <hr></hr>
    <h1>Actividad 20 Párrafo</h1>
    <Parrafo></Parrafo>
    <Parrafo></Parrafo>
    <Parrafo></Parrafo>
    <hr></hr>
    <h1>Actividad 20 Contador</h1>
    <Contador></Contador>
    <hr></hr>
    <h1>Actividad 22 Consumir api usuarios</h1>
    <User></User>
     
    </div>
  );
}

export default App;
