import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [personajes, setPersonajes] =useState([])

  //en apis se usa useeffect
  // useEffect(parametro1, dependencia)
  //DEPENDENCIA
  // cuando no tiene nada ==> que se ejecuta con cada renderizado
  // cuando tiene [] se ejecuta una vez
  //[variables] cada vez que se cambie el valor de la variable, se va a ejecutar
  console.log('se ejecuta')

  useEffect(()=>{
      console.log('se ejecuta useeffect')
      const obtenerPersonajes = async()=>{
        const response = await axios.get("https://rickandmortyapi.com/api/character")
        setPersonajes(response.data.results)
      }
      obtenerPersonajes()

  },[])
  console.log('se termina de ejecutar useeffect')

  return (
    <div className="App">
      {personajes.map(elemento=>
      <div className='card'>
      <h2>{elemento.name}</h2>
      <img src={elemento.image} alt="" />
      </div>
      )}

    </div>
  )
}

export default App
