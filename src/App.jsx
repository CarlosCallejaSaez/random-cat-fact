import React,{ useState,useEffect } from 'react'

import './App.css'

function App() {
  const [data, setData] = useState()

 const  fetchFact = ()=>{ fetch("https://catfact.ninja/fact")
 .then(response => response.json())
 .then(data => setData(data))
 .catch(err => console.log(err))}
  
  useEffect(() => {
 
    fetchFact();
    
  }, [])
  
console.log(data)
  return (
    <>
    <h2>Haz click en el botón para obtener una nueva curiosidad sobre los gatos</h2>
    <hr />
    <button onClick={()=>fetchFact()}>Botón</button>
    <p>{data.fact}</p>
    </>
  )
}

export default App
