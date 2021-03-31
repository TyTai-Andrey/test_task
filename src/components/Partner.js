import React from 'react';



function Partner({params}) {
   

    return (

        <div id={params.URL} className="partner-icon">
            <img src={params.URL} alt={params.alt} />
        </div>
    )
}

export default Partner