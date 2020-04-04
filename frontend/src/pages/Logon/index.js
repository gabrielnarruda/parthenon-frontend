import React, { useState } from 'react'

import {Link, useHistory} from 'react-router-dom'

import {FiLogIn} from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import headerLogo from '../../assets/headerLogo.svg'
import heroesImg from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId] = useState('');

    const history=useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try {
            const response = await api.post('sessions',{ id }) ;

            console.log(response.data.name);

            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name);

            history.push('/profile');
        } catch (err) {
            alert("Falha no Login, tente novamente.")
            
        }
    } 

    return (
        <div className="logon-container">
            <nav className="nav-header">
                <img src={headerLogo} alt="Parthenon Logo"/>
                <ul>
                    <li><a href="http://google.com">Sobre</a></li>
                    <li><a href="http://google.com">Contato</a></li>
                    <li><a href="http://google.com">Login</a></li>
                    <li><a href="http://google.com">Registre-se</a></li>
                </ul>
            </nav>
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
            
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}/>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="register">
                        <FiLogIn size={16} color="E02041"/> 
                        Não tenho cadastro 
                    </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes"/>
        </div>



        
    );
}