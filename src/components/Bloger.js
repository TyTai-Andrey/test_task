import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import Context from '../context';





function Bloger({parametrs}) {
    // const {blogers} = useContext(Context)


    const [Bloger, setBloger] = useState(Context)


    const a = 'url(' + parametrs.photo + ') no-repeat center'
    const bg_img = {background: a}

    return (
        <div className="bloger_block" style={bg_img}>
            <Link  to={`/blogers/${parametrs.id}`}>
                <div className="bloger_block-bg">
                    <div className="bloger_block-text">
                        <h2 className="bloger_block-name">asd</h2>
                        <div className="bloger_block-socials">
                            <div className="bloger_block-social">Youtube</div>
                            <div className="bloger_block-social">VK</div>
                            <div className="bloger_block-social">Inst</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Bloger