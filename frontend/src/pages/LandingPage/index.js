import React, { useState } from 'react'

import { Link, useHistory } from 'react-router-dom'

import { FiLogIn, FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'

import logoImg from '../../assets/logo.svg';
import logoImgNoNameW from '../../assets/logo_noname_w.svg';
import logoImgNoNameG from '../../assets/logo_noname_g.svg'

    /*
        Landing Function
    */

export default function LandingPage() {
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

    /*
        Register Function
    */

    const [name, setName] = useState('');
    const [institution, setInstitution] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            institution,
            email,
            phone,
            city,
            uf,
        };

        try {
            const response = await api.post('ongs', data)

            alert(`Seu ID de acesso: ${response.data.id}`)
            history.push('/');
        } catch (err) {
            alert(`Erro ao Realizar Cadastro, tente novamente`)
        }
    }

    /*
        Landing Section
    */ 

    return (
        <div id="full-page">
            <section id="landing-section">
                <header>
                    <img src={logoImgNoNameW}
                        onMouseOver={e => (e.currentTarget.src = logoImgNoNameG)}
                        onMouseOut={e => (e.currentTarget.src = logoImgNoNameW)}
                        alt="Parthenon Community"
                    />
                    <nav className="buttonNav">
                        <ul className="headerButtonList">
                            <li><a href="#">Sobre</a></li>
                            <li><a href="#">Contato</a></li>
                            <li><a href="#">Login</a></li>
                            <li className="separator"></li>
                            <li><a href="#register-section">Cadastre-se</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="landing-body">

                    <img src={logoImg} alt="Parthenon Logo" />

                    <section className="landing-tbox">

                        <form onSubmit={handleLogin}>
                            <h1>Venha fazer parte da nossa comunidade científica</h1>
                            <p>
                                Organize seus arquivos e trabalhos científicos, junte-se a outros cientistas e aproveite os benefícios das nossas ferramentas.
                            </p>

                            <Link className="back-link" to="register" style={{ color: "#FFF" }}>
                                <button className="button" type="submit">Cadastre-se</button>
                            </Link>
                        </form>
                    </section>
                </div>
            </section>

        {/*
            Register Section
        */}

            <section id="register-section" >
                <div className="register-container">
                    <div className="content">
                        <section>
                            <h1>Venha fazer parte da nossa comunidade científica</h1>
                            <p>Como um usuário premium, você poderá baixar licenças que permitem usar todos os recursos incluídos no Freepik Selection sem atribuição. Além disso, seu limite de downloads será alterado de 10 para 100 por dia. Como usuário Premium, você também terá acesso ao nosso novo conteúdo exclusivo para assinantes.</p>
                            

                            <Link className="back-link" to="/" style={{ color: "#C9A261" }} >
                                <FiArrowLeft size={16} />
                                Já tenho cadastro
                            </Link>
                        </section>

                        <form className ="form-register" onSubmit={handleRegister}>

                            <input placeholder="Nome completo"
                                value={name}
                                onChange={e => setName(e.target.value)} />

                            <input type="institution" placeholder="Instituição"
                                value={institution}
                                onChange={e => setInstitution(e.target.value)} />

                            <input type="email" placeholder="E-mail"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />

                            <input placeholder="Telefone"
                                value={phone}
                                onChange={e => setPhone(e.target.value)} />

                            <div className="input-group">
                                <input placeholder="Cidade"
                                    value={city}
                                    onChange={e => setCity(e.target.value)} />

                                <input placeholder="UF" style={{ width: 80 }}
                                    value={uf}
                                    onChange={e => setUf(e.target.value)} />
                            </div>

                            <button className="button" type="submit">Cadastrar</button>

                        </form>
                    </div>
                </div>
            </section>

            <footer>
                <p>2020 © Tekmor</p>
            </footer>
        </div>
    );
}