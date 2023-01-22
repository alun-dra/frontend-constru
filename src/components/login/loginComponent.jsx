import React from 'react'

function LoginComponent() {
  return (
    <div className='container'>
        <form action="" className='container-form'>
            <h2 className='title-form'>Acceso</h2>
            <div className='inputbox'>
                <input type="text" required="required" className='input' />
                <span className='span' >Usuario</span>
                <li className='li'></li>
            </div>
            <div className='inputbox'>
                <input type="password" required="required" className='input'/>
                <span className='span' >Contraseña</span>
                <li className='li'></li>
            </div>
            <div className='container-button'>
                <button className='button' value="sudmit">Ingresar</button>
            </div>
        </form>
        
    </div>
  )
}

export default LoginComponent