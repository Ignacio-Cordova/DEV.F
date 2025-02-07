import './App.css'
import Input from './components/input.jsx'
import Button from './components/button.jsx'
import Select from './components/select.jsx'

function App() {
  const opciones = ["Masculino", "Femenino", "Sin Especificar"]
  return <div>
    <h1 className='h1'>Bienvenido</h1>
    <div className='formulario'>
    <Input id="nombre" type="text"></Input>
    <Input id="email" type="email"></Input>
    <Input id="fecha" type="date"></Input>
    <Input id="numero" type="number" ></Input>
    <Select id="sexo" opciones={opciones}></Select>
    <Button id="enviarForm" texto="Enviar"></Button>
    </div>
  </div>
}

export default App;
