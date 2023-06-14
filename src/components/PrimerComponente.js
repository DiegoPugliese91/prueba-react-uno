import React, {useState} from 'react'

const PrimerComponente = () => {

  //let nombre = "Diego";
  let apellido = "Pugli";
  
  const [nombre,setNombre] = useState("Diegol");

  let cursos= 
  [
    "Javascript",
    ".Net",
    "sql"
  ]   

  function cambiarNombre(nuevoNombre)
  {
    setNombre(nuevoNombre);
  }

  function handleChange(e) {
    cambiarNombre(e.target.value);
  }

  return (
    <div>
        <h1>Hola Comp1</h1>
        <p>Mi nombre es: {nombre}</p>
        <p>Mi apellido es: {apellido}</p>
        
        <input type="text" onChange={handleChange} />

        <button onClick={() => cambiarNombre("pepe")}>Cambiar nombre</button>

        <div>
         <h2>Lista de Cursos</h2>
         <ul>
           {cursos.map((curso, index) => (
           <li key={index}>{curso}</li>
           ))}
           </ul>
    </div>

    </div>
  )
}

export default PrimerComponente