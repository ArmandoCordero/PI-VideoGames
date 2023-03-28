import React from 'react'
import i from '../imagenes/pulp-fiction-john-travolta.gif'
import s from '../style/Error.module.css'

export default function Error () {

    return (
        <div className={s.jhon}>
            <h1>No se encontraron videojuegos</h1>
            <img src={i} alt='jhon' />
        </div>
    )
}