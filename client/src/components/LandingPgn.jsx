import React from "react";
import { Link } from 'react-router-dom'
import page from '../style/LandingPgn.module.css'


const LandingPgn = () => {
    return (
        <div className={page.complet}>
            <div className={page.interno}>
                <div className={page.content}>
                    <h1 className={page.tituloFirst}>Videogames APP</h1>
                    <Link to='/home'>
                        <button className={page.button}>
                            <span className={page.ingresar}>GET STARTED</span>
                        </button>
                    </Link>
                </div>
           </div>
        </div>
    )

}

export default LandingPgn