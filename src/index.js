import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



import Home from './pages/Home';
import Blogers from './pages/Blogers';

import Context from './context';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './index.scss';
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



const arrBlogers = [
	{id: "b6", bg_img: null, bg_color: "#34AADD", title:'Цветок, который стоит на столе, такой загадочный.', description: 'А тут описание цветка, придающее ему загадочности и вызывающее интерес пользователя'},
]




function App() {


    return (

        <BrowserRouter>
	        <Context.Provider value={{logo, footer, bloger1}}>
		        <Navbar/>
		       	<div className="body">
		    		<Switch>
						<Route path={'/'} exact component={Home}/>
						<Route path={'/blogers'} component={Blogers}/>
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