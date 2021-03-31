import React, {useContext, useState} from 'react';

import Context from '../context';





function Bloger({match}) {
	const {blogers} = useContext(Context)
	const result = blogers.find((i)=>i.id===match.params.id)
	const name = 'Blogers HELP'
	console.log(result)
    return (
        <div>
        	<h1>{result.name}</h1>
        	<img src={result.photo} alt=""/>
        </div>

    )
}

export default Bloger