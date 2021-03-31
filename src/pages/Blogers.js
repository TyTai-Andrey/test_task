import React, {useContext, useState} from 'react';


import Context from '../context';

import Bloger from '../components/Bloger';




function Blogers() {
	
	const {blogers}=useContext(Context)
	console.log(blogers)

   

    return (
        

        <section className="blogers">
            <div className="swapper">
                <h1>Блогеры</h1>
                <div className="sort">
                    <h3>Сортировать по:</h3>
                    <div className="list1">
                        <select id="area">
                           <option value="Naples">выберете площадку</option>
                           <option value="London">Все</option>
                           <option value="Berlin">DIY</option>
                           <option value="New York">Авто</option>
                           <option value="Frattamaggiore">Авторское шоу</option>
                        </select>
                    </div>
                    <div className="list2">
                        
                        <select id="social">
                           <option value="Naples">выберете направление</option>
                           <option value="London">YouTube</option>
                           <option value="Berlin">VK</option>
                           <option value="New York">Instagram</option>
                        </select>
                    </div>
                </div>
                <div className="blogers">
                    {blogers.map((i)=>{
                            return <Bloger key={i.id} parametrs={i}/>
                        })}
                </div>
            </div>
            
                
            
        </section>







    	

    )
}

export default Blogers