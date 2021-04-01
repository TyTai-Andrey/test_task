import React, {Fragment,useContext, useState, useEffect} from 'react';

import Context from '../context';
import { NavLink, Link } from 'react-router-dom';




export default function Navbar() {

	const {logo, location} = useContext(Context)

	let classes = []

	const pathname = location.pathname.split('/')
	if(pathname[1]==='blogers' && pathname.length===3) {
		classes.push('active')
	}
    return (
        <header>
        	<nav className="navbar_header_mobaile-menu">
        		<div className="language">
		        	<span>en</span> / <span>ru</span>
		        </div>
	        	<ul>
	        		<li>
		        		<NavLink to="/blogers" >Блогеры</NavLink>
	        		</li>
	        		<li>
		        		<NavLink to="/pay" >Кейсы</NavLink>
	        		</li>
	        		<li>
		        		<NavLink to="/saveguard" >exit agency</NavLink>
	        		</li>
	        		<li>
		        		<NavLink to="/contacts" >Контакты</NavLink>
	        		</li>
	        	</ul>
	        	<div className="exit">
	        		Закрыть
	        	</div>
        	</nav>
        	<div className='navbar_header_mobaile'>
					<div className='navbar_header_mobaile-logo_nav'>
						<div className="navbar_header_mobaile-logo">
							<NavLink to="/" exact>
				        		<div className="logo-img">
					        		<img src={logo} alt="as" width='40' height='40'/>
								</div>
			        		</NavLink>
						</div>
		        	</div>
						<div className="navbar_header_mobaile-nav">
							<span className="long"></span>
							<span className='short'></span>
							<span className='short'></span>
							<span className="long"></span>
						</div>
		        	
		        </div>
			<div className="swapper">
	        	<div className='navbar_header'>
					<div className='logo'>
						<NavLink to="/" exact>
			        		<div className="logo-img">
				        		<img src={logo} alt="as"/>
							</div>
		        		</NavLink>
		        	</div>
		        	<nav className="navbar_header-menu">
			        	<ul>
			        		<li>
				        		<NavLink to="/blogers" >Блогеры</NavLink>
			        		</li>
			        		<li>
				        		<NavLink to="/pay" >Кейсы</NavLink>
			        		</li>
			        		<li>
				        		<NavLink to="/saveguard" >exit agency</NavLink>
			        		</li>
			        		<li>
				        		<NavLink to="/contacts" >Контакты</NavLink>
			        		</li>
			        	</ul>
		        	</nav>
		        	<div className="language">
		        		<span>en</span> / <span>ru</span>
		        	</div>
		        </div>
		        
		        <div className="navbar_footer">
		        	<ul>
		        		<li><NavLink to="/" exact>Главная</NavLink></li>

		        		{pathname[1]==='blogers' && pathname.length>=2 ? (
		        			<Fragment>
			        			<span>/</span>
			        			<li>
				        			<NavLink exact to="/blogers">Блогеры</NavLink>
			        			</li>
		        			</Fragment>) : null}

		        		{pathname[1]==='blogers' && pathname.length===3 ? (
		        			<Fragment>
			        			<span>/</span>
			        			<li>
				        			<Link to={document.location.pathname} className={classes.join(' ')}>Блогер</Link>
			        			</li>
		        			</Fragment>) : null}
		        	</ul>
		        </div>
			</div>
		</header>
    )

}