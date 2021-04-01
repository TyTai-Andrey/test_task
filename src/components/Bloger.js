import React, {useState} from 'react';
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
                        <h2 className="bloger_block-name">{parametrs.name}</h2>
                        <div className="bloger_block-socials">
                            <div className="bloger_block-social"><i className="fa fa-play-circle" aria-hidden="true"></i> <span>{parametrs.YouTube}</span></div>
                            <div className="bloger_block-social"><i className="fa fa-camera" aria-hidden="true"></i> <span>{parametrs.VK}</span></div>
                            <div className="bloger_block-social"><i className="fa fa-camera" aria-hidden="true"></i> <span>{parametrs.Instagrame}</span></div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default Bloger