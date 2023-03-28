import React from "react";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import i from "../style/navBar.module.css"
import imagen from '../imagenes/Ralf.png'
import { getAllVideogames } from "../actions";
import { useDispatch } from "react-redux";

export default function NavBar() {

    const dispatch = useDispatch()

    const handleRefresh = (e) => {
        e.preventDefault()
        dispatch(getAllVideogames())
    }

    return (
         <div className={i.box}>
            <nav className={i.nav}>
                <div className={i.busqueda}>
                    <SearchBar />
                </div>
                <div className={i.imagencita}>
                    <img src={imagen} alt="Ralf.img" className={i.gif}/>
                </div>
                <div className={i.search}>
                    <button className={i.btn}onClick={e => handleRefresh(e)}>Refresh</button>
                    <span className={i.opcion}><NavLink to={'/create'} className={i.to}> Create Videogame</NavLink></span>
                </div>
            </nav>
       </div>
    )
}