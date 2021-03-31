import React, {useContext} from 'react';
import Partner from './Partner';

import Context from '../context';


function Partners() {

const {arrParthers} = useContext(Context)

   
    return (
        <section className="partners">
            <div className="swapper">
                <h1>Наши партнёры</h1>
                
                <div className="partners-icon mt-50">
                    
                    {
                        arrParthers.map((i)=>{
                            return <Partner key={i.id} params={i}/>
                        })
                    }

                    
                </div>
            </div>
        </section>
    )
}

export default Partners