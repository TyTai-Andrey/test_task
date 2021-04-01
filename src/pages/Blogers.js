import React, {useContext} from 'react';


import Context from '../context';

import Bloger from '../components/Bloger';




function Blogers() {
	
	const {blogers}=useContext(Context)


   

    return (
        

        <section className="blogers">
            <div className="swapper">
                <h1 className='m1'>Блогеры</h1>
                <div className="sort">
                    <h3>Сортировать по:</h3>
                    <div id="list1" className="list">
                        <select id="area">
                           <option value="Naples">выберете площадку</option>
                           <option value="London">Все</option>
                           <option value="Berlin">DIY</option>
                           <option value="New York">Авто</option>
                           <option value="Frattamaggiore">Авторское шоу</option>
                        </select>
                    </div>
                    <div id="list2" className="list">
                        
                        <select id="social">
                           <option value="Naples">выберете направление</option>
                           <option value="London">YouTube</option>
                           <option value="Berlin">VK</option>
                           <option value="New York">Instagram</option>
                        </select>
                    </div>
                </div>
                <div className="allBlogers">
                    {blogers.map((i)=>{
                            return <Bloger key={i.id} parametrs={i}/>
                        })}
                </div>

            </div>
            <div className="loading_line">
                    <span>Подгружаем...</span>
                </div>
            
                
            
        </section>







    	

    )
}

export default Blogers