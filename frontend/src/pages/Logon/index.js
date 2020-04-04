import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import logoImgNoNameW from '../../assets/logo_noname_w.svg';
import logoImgNoNameG from '../../assets/logo_noname_g.svg'
import heroesImg from '../../assets/Logon/parthenon_logo.png';

export default function Logon() {
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id });

            console.log(response.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert("Falha no Login, tente novamente.")
        }
    }

    return (
        <div className="logon-container">
            <header>
                <img src={logoImgNoNameW}
                    onMouseOver={e=>(e.currentTarget.src =logoImgNoNameG)}
                    onMouseOut={e=>(e.currentTarget.src = logoImgNoNameW)}
                    alt="Parthenon Community"
                />
                <nav className="buttonNav">
                    <ul className="headerButtonList">
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                        <li><a href="#">Login</a></li>
                        <li className="separator"></li>
                        <li><a href="#">Registre-se</a></li>
                    </ul>
                </nav>
            </header>
            <div className="logon-body">

                <img src={logoImg} alt="Heroes" />

                <section className="form">

                    <form onSubmit={handleLogin}>
                        <h1>Venha fazer parte da nossa comunidade científica</h1>
                        <p style={{}}>
                            Organize seus arquivos e trabalhos científicos, junte-se a outros cientistas e aproveite os benefícios das nossas ferramentas.
                        </p>

                        <Link className="back-link" to="register" style={{ color: "#FFF" }}>
                            <button className="button" type="submit">Cadastre-se</button>
                        </Link>
                    </form>
                </section>
            </div>
        </div>
    );
}