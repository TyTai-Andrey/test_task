import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';

import Context from '../context';

function Footer() {
   
    const {footer} = useContext(Context)


    return (
        <footer>
            <div className="swapper">
                <div className="footer mt-50">
                    <div className="footer-info_logo">
                        <div className="footer-logo">
                            <NavLink to="/" exact>
                            <img src={footer} alt=""/>
                            </NavLink>
                        </div>
                        <div className="footer-info">
                            <ul>
                                <li>Связаться с нами</li>
                                <li>reklama@wildjam.ru</li>
                                <li>ул. Сущевская, д. 27, стр. 2</li>
                                <li>+7 (499) 393-39-62</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-social">
                        <div><NavLink to="/" exact><i className="fa fa-play-circle" aria-hidden="true"></i></NavLink></div>
                        <div><NavLink to="/" exact><i className="fa fa-camera" aria-hidden="true"></i></NavLink></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer