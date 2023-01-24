import React from 'react'
import {useState} from 'react';

import axios from 'axios'

import {urlApi} from '../../api/urls'

function LoginComponent() {

    const [details, setDetails] = useState({
        email: "",
        password: "",
    })

    const handleChance = (e) =>{
        setDetails({...details,[e.target.name]:e.target.value})
    }

    const hanbleButton = () =>{
        const url = urlApi + 'api/singin'
        axios.post(url, details)
        .then(response =>{
            console.log(response)
        })
        console.log("enviado")
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setDetails({email: "", password: ""}) 
        // console.log(details)     
    }

  return (
    <div className='container'>
        <form action="" onSubmit={handleSubmit} className='container-form'>
            <h2 className='title-form'>Acceso</h2>
            <div className='inputbox'>
                <input type="email" value={details.email} name='email' required="required" className='input' onChange={handleChance} />
                <span className='span' >Correo Electronico</span>
                <li className='li'></li>
            </div>
            <div className='inputbox'>
                <input type="password" value={details.password} name='password' required="required" className='input' onChange={handleChance} />
                <span className='span' >Contraseña</span>
                <li className='li'></li>
            </div>
            <div className='container-button'>
                <button className='button' value="sudmit" onClick={hanbleButton}>Ingresar</button>
            </div>
        </form>
        
    </div>
  )
}

export default LoginComponent