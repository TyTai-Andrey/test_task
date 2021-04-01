import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Home from './pages/Home';
import Blogers from './pages/Blogers';
import BlogerPage from './pages/BlogerPage';

import Context from './context';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './index.scss';

import play from './images/play.png';

import logo from './images/Logo-98.png';

import footer from './images/Logo-201.png';

import bloger1 from './images/blogers/bloger1.png'
import bloger2 from './images/blogers/bloger2.png'
import bloger3 from './images/blogers/bloger3.png'
import bloger4 from './images/blogers/bloger4.png'
import bloger5 from './images/blogers/bloger5.png'
import bloger6 from './images/blogers/bloger6.png'
import bloger7 from './images/blogers/bloger7.png'
import bloger8 from './images/blogers/bloger8.png'

import video1 from './images/video/video1.png'
import video2 from './images/video/video2.png'
import video3 from './images/video/video3.png'
import video4 from './images/video/video4.png'
import video5 from './images/video/video5.png'
import video6 from './images/video/video6.png'

const arrBlogers = [
	{id: "b6", bg_img: null, bg_color: "#34AADD", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
]




function App() {

	const [location, setLocation] = useState(
					{pathname: document.location.pathname}
					)
	const [blogers, setBlogers] = useState(
			[
				{id: "b1", photo: bloger1, name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b2", photo: bloger2,name: "Макс Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b3", photo: bloger3,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b4", photo: bloger4,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b5", photo: bloger5,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b6", photo: bloger6,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b7", photo: bloger7,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
				{id: "b8", photo: bloger8,name: "Максим Максимов", YouTube: "3 160 000+", VK: "134 000+", Instagrame: "128 000+", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus elit lobortis pellentesque tellus mi nulla morbi. Risus, quis consectetur sagittis pharetra, urna, leo. Egestas porta habitasse fermentum nulla neque. At eget leo sed bibendum nunc. Diam neque, eu velit urna, feugiat vulputate elit justo. Lectus diam lacus vel donec sit. Vitae venenatis amet suscipit enim nec tincidunt sit lacus. Morbi orci, eget vitae tortor cras at eu duis. Sit est, cursus sem facilisis sed ac"},
			]
		)

	const [blogerVideo, SetBlogerVideo] = useState(
			[
				{id: "b1", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b2", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b3", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b4", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b5", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b6", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b7", video: [video1, video2, video3, video4, video5, video6,], },
				{id: "b8", video: [video1, video2, video3, video4, video5, video6,], },
			]
		)

	function checkLocation(event) {
		if (event.target.tagName === "A" || event.target.classList.contains('bloger_block') ) {
				setTimeout(()=>{setLocation({pathname: document.location.pathname})}, 10)

			console.log("click")
	}
	}

	function checktion(path) {
		
				setTimeout(()=>{setLocation(path)}, 10)

			
		}
	

	
	useEffect(()=>{
		document.addEventListener('click', checkLocation)

			return ()=> {
				document.removeEventListener('click', checkLocation)
			}
		}
	)

	

    return (

        <BrowserRouter>
	        <Context.Provider value={{play, checktion,logo, footer, blogers, blogerVideo, location}}>
		        <Navbar />
		       	<div className="body">
		    		<Switch>
						<Route path={'/'} exact component={Home}/>
						<Route path={'/blogers'} exact component={Blogers}/>
						<Route path={'/blogers/:id'} component={BlogerPage}/>
					</Switch>
		    	</div>
	            <Footer/>
	    	</Context.Provider>
    	</BrowserRouter>
    )

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();