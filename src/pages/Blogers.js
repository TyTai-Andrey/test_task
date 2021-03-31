import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';

import Context from '../context';




function Blogers() {
	
	const {blogers}=useContext(Context)
	console.log(blogers)

   

    return (
        
    	<ul>
    		{blogers.map((i)=>{
    		    		return <li  key={i.id}><Link  to={`/blogers/${i.id}`}>{i.name}</Link></li>
    		    	})}
    	</ul>

    )
}

export default Blogers