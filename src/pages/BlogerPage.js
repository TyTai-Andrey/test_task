import React, {useContext, useState, useEffect} from 'react';

import Context from '../context';





function BlogerPage({match}) {
	const {blogers, checktion} = useContext(Context)
	const result = blogers.find((i)=>i.id===match.params.id)
	const name = 'Blogers HELP';

    const pathname = document.location.pathname.split('/')
    if(pathname[1]==='blogers' && pathname.length===3) {
        checktion({pathname: document.location.pathname})
    }
    

	console.log(result)
    return (
        <div>
        	<h1>{result.name}</h1>
        	<img src={result.photo} alt=""/>
        </div>

    )
}

export default BlogerPage