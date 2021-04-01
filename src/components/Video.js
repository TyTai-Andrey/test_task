import React from 'react';


import play from '../images/play.png';



function Video({parametrs}) {
    // const {blogers} = useContext(Context)


    // const [Video, setVideo] = useState(Context)


    const a = 'url(' + parametrs + ') no-repeat center'
    const bg_img = {background: a}
    // const bg_img = {background: a}

    return (
        <div className="last_video" style={bg_img}>
            <div className="last_video-bg">
                <div className="play">
                    <img src={play} alt=""/>
                </div>
            </div>
        </div>

    )
}

export default Video