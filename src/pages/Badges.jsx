import React, { useState, useEffect } from "react";

import BadgeHero from "../component/BadgeHero";
import BadgeList from "../component/BadgeList";
import { Link } from "react-router-dom";


export default function Badges() {
  const [data, setData] = useState({
    datos: [],
    loading:true
    
  });

  //Estado para manejar el input para buscar
  const [buscarBadge, setBuscarBadge]=useState({
    nombre:''
  })

  
 useEffect(() => {
    
    getData()

    return () => {
      
    }
  }, [])

    const getData= async ()=>{

      const resp= await fetch("http://localhost:3004/data")
      const data = await resp.json()

      setData({
        datos:data,
        loading:false
      })


    }

    //funcion para maejar cuando cambia el contenido del input
    const handleChange=({target})=>{
        setBuscarBadge({
          nombre:target.value
        })
    }

    //Filtro para los datos de la busqueda
    const newData =data.datos.filter(badge=>{
      return badge.firstName.toLowerCase().includes(buscarBadge.nombre.toLowerCase())
    })

    

    

  return (
    <>
      <BadgeHero />
      <div className="container">
        <div className="row mb-3">
          <div className="col-6 offset-3">
            <Link to="/badges/new" className="btn btn-info float-right">
              Nuevo ingreso
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-6 offset-3">
              {data.loading ? <h3>Loading...</h3> :
              
              <BadgeList data={newData} handleChange={handleChange} buscarBadge={buscarBadge} />
              }
          
          </div>
        </div>
      </div>
    </>
  );
}
