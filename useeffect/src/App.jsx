import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
 
  //en apis se usa useeffect
  // useEffect(parametro1, dependencia)
  //DEPENDENCIA
  // cuando no tiene nada ==> que se ejecuta con cada renderizado
  // cuando tiene [] se ejecuta una vez
  //[variables] cada vez que se cambie el valor de la variable, se va a ejecutar
  const [personajes, setPersonajes] = useState([])
  let [pagina,setPagina] = useState(1)
  //let [resultado,setResultado] = useState('')

  useEffect(()=>{
      console.log('se ejecuta useeffect')
      const obtenerPersonajes = async()=>{
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${pagina}`)
        setPersonajes(response.data.results)
      }
      obtenerPersonajes()

  },[pagina])

  const busqueda=(e)=>{
    console.log(e.target.value)
    const resultadoBusqueda=personajes.filter(elemento=>elemento.name.toLowerCase().includes(e.target.value))
    setPersonajes(resultadoBusqueda)
  }

  return (
    <div className="App">
      <div>
        <input type="text" placeholder='Ingresa el nombre a buscar' onChange={(e)=>busqueda(e)
        
        }/>
      </div>

      <div className='container'>
      {personajes.map(elemento=>(
      <div key={elemento.id} className='card'>
      <h2>{elemento.name}</h2>
      <img src={elemento.image} alt="" />

      </div>
      ))}
      </div>

      <div className='buttons'>
      <button onClick={()=> setPagina(pagina-1)}>Anterior</button>
      <button onClick={()=> setPagina(pagina+1)}>Siguiente</button>
      </div>
      
    </div>
  )
}

export default App
