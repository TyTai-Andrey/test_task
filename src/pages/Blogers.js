import React, {useContext, useState} from 'react';


import Context from '../context';

import Bloger from '../components/Bloger';




function Blogers() {
	
	const {blogers}=useContext(Context)

    const [ list1, setList1] = useState("0px") /*408*/
    const [ list2, setList2] = useState("0")
   
    const [ options1, setOptions1] = useState(false)
    const [ options2, setOptions2] = useState(false)

    return (
        

        <section className="blogers">
            <div className="swapper">
                <h1 className='m1'>Блогеры</h1>
                <div className="sort">
                    <h3>Сортировать по:</h3>
                    <div id="list1" className="list" >
                        <div className="select">
                            <div className="select_site">выберете площадку 
                                <i className="fa fa-angle-down"
                                onClick={()=>{(list1=="278px") ? setList1("0px") : setList1("278px"); setTimeout(()=>{setOptions1(false)}, 750)}}
                                ></i>
                            </div>
                            <div className="select_options" style={{height: list1}}>
                                <ul>
                                    <li><span>Например: Путешествия</span></li>
                                    <li>Все</li>
                                    <li>DIY</li>
                                    <li>Авто</li>
                                    <li>Авторское шоу</li>
                                    <li>Анбоксинг</li>
                                    <li>Еда</li>

                                    {options1 && <li>DIY</li>}
                                    {options1 && <li>Авто</li>}
                                    {options1 && <li>Авторское шоу</li>}
                                    {options1 && <li>Анбоксинг</li>}
                                    {options1 && <li>Еда</li>}
                                </ul>
                                <div className="add_options"><i className="fa fa-angle-down"
                                onClick={()=>{
                                    if (!options1) {setOptions1(!options1); setList1("420px")}
                                }}
                                ></i></div>
                            </div>
                        </div>
                    </div>
                    <div id="list2" className="list">
                        <div className="select">
                            <div className="select_site">выберете площадку 
                                <i className="fa fa-angle-down"
                                onClick={()=>{(list2=="142px") ? setList2("0px") : setList2("142px"); setTimeout(()=>{setOptions2(false)}, 750)}}
                                ></i>
                            </div>
                            <div className="select_options" style={{height: list2}}>
                                <ul>
                                    <li><span>Например: Путешествия</span></li>
                                    <li>Все</li>
                                    <li>DIY</li>

                                    {options2 && <li>DIY</li>}
                                    {options2 && <li>Авто</li>}
                                    {options2 && <li>Авторское шоу</li>}
                                    {options2 && <li>Анбоксинг</li>}
                                    {options2 && <li>Еда</li>}
                                </ul>
                                <div className="add_options"><i className="fa fa-angle-down"
                                onClick={()=>{
                                    if (!options2) {setOptions2(!options2); setList2("281px")}
                                }}
                                ></i></div>
                            </div>
                        </div>
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