import React, {useState, useEffect} from 'react';

import "./styles.css";

import api from './services/api';

import Header from "./components/Header.js";
import Footer from "./components/Footer.js";

export default function App() {

	const [avatar, setAvatar] = useState('');
	const [repository, setRepository] = useState([]);

	useEffect(() => {
	    async function loadData(){
	    	const avatar = await api.get();
	    	const res = await api.get('/repos');

	    	setAvatar(avatar.data.avatar_url);
	    	setRepository(res.data);
	    }

	    loadData();
	}, []);

	return(
		<>
			<Header />
		    <div className="wrapper">
		    	<img src={avatar} alt="kido" />
				<h1>Fábio Henrique</h1>
				<h2>Programador Full Stack JavaScript</h2>
				<p>
					Programador javascrip com experiência em reactjs, react native e nodejs. Experiência em php symfony e em documentar e gerenciar softwares, com base em pmbook, uml e metodologias ágeis.
				</p>
		    </div>
		    <div className="container">
		    	<h1>Repositórios</h1>
				{repository.map(repo => (
						<div key={repo.id}>
							<h1>{repo.name}</h1>
							<p>{repo.description}</p>
						</div>
					))
				}
			</div>
		    <Footer />
		    <ul className="squares"></ul>
		</>
	)
}