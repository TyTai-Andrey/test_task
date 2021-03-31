import React, {useContext} from 'react';

import Context from '../context';
import { NavLink } from 'react-router-dom';




export default function Navbar() {

	const {logo, bloger1} = useContext(Context)

    return (
        <header>
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
		        		<li><NavLink to="/contacts" >Главная</NavLink></li><span>/</span>
		        		<li><NavLink to="/contacts" >Блогеры</NavLink></li><span>/</span>
		        		<li><NavLink to="/" exact>Блогер</NavLink></li>
		        	</ul>
		        </div>
			</div>
		</header>
    )

}