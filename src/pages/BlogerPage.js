import React, {useContext, useState} from 'react';

import Context from '../context';
import Video from '../components/Video';
import Bloger from '../components/Bloger';




function BlogerPage({match}) {
	const {blogers, checktion, blogerVideo} = useContext(Context)
    const result = blogers.find((i)=>i.id===match.params.id);
	const arrVideo = blogerVideo.find((i)=>i.id===match.params.id);
    const another_blogers = blogers.sort((i)=>i.id!==match.params.id);


    

    const [distance, setDistance] = useState({items: 0, track: 0})

    function move (auhtificator) {
        
        let row = document.querySelector(".another_blogers-row");
        let items = document.querySelector(".another_blogers-items");
        let item = document.querySelector(".bloger_block");
        let range = document.querySelector(".range");
        let track = document.querySelector(".track");

        let a = {
            rowWidth: row.scrollWidth,
            rowWidthVisible: row.clientWidth,
            rowRight: items.clientLeft,
            itemWidth: item.clientWidth,
            rangeWidth: range.clientWidth,
            trackWidth: track.clientWidth,
            trackLeft: track.clientLeft,
            num: ((row.scrollWidth-row.clientWidth)/(item.clientWidth+20)),
        };



        if (auhtificator === "right") {
                console.log(a)
            if (a.num != 0) {
                a.rowRight = distance.items+((a.rowWidth-a.rowWidthVisible)/a.num);
                a.trackLeft = distance.track+((a.rangeWidth-a.trackWidth-distance.track)/a.num);
                setDistance({items: a.rowRight, track: a.trackLeft})
            }
        }
        if (auhtificator === "left") {
            if (a.num != 4) {
                if (a.num === 0 ) {
                    a.rowRight = distance.items-331;
                    a.trackLeft = distance.track-40;
                    setDistance({items: a.rowRight, track: a.trackLeft})
                } else {
                    a.rowRight = distance.items-((a.rowWidth-a.rowWidthVisible)/a.num);
                    a.trackLeft = distance.track-((a.rangeWidth-a.trackWidth-distance.track)/a.num);
                    setDistance({items: a.rowRight, track: a.trackLeft})
                }
            }
        }

    }

    const [trackState, setTrackState] = useState(0)

    const pathname = document.location.pathname.split('/')
    if(pathname[1]==='blogers' && pathname.length===3) {
        checktion({pathname: document.location.pathname})
    }
    


    return (
        <section className="bloger_page">
            <div className="swapper">
                <div className="bloger_info mt-50">
                    <div className="bloger_info-photo">
                        <img src={result.photo} width = '100%' height="100%" alt=""/>
                    </div>
                
                    <div className="bloger_info-text">
                        <h1>{result.name}</h1>
                        <hr/>
                        <div className="bloger_info-socials">
                            <div className="bloger_info-social">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M64 55.1111C64 60.0213 60.0213 64 55.1111 64H8.88889C3.98044 64 0 60.0213 0 55.1111V8.88889C0 3.97867 3.98044 0 8.88889 0H55.1111C60.0213 0 64 3.97867 64 8.88889V55.1111Z" fill="#F44336"/>
                                    <path d="M54.2202 34.6631C53.7295 32.9156 52.2842 31.5378 50.4478 31.0702C47.1215 30.2222 31.9998 30.2222 31.9998 30.2222C31.9998 30.2222 16.878 30.2222 13.5518 31.072C11.7171 31.5396 10.27 32.9156 9.77932 34.6649C8.88866 37.8329 8.88866 44.4445 8.88866 44.4445C8.88866 44.4445 8.88866 51.056 9.77932 54.2258C10.27 55.9733 11.7153 57.3511 13.5518 57.8187C16.878 58.6667 31.9998 58.6667 31.9998 58.6667C31.9998 58.6667 47.1198 58.6667 50.4478 57.8169C52.2824 57.3493 53.7295 55.9733 54.2202 54.224C55.1109 51.056 55.1109 44.4445 55.1109 44.4445C55.1109 44.4445 55.1109 37.8329 54.2202 34.6631Z" fill="white"/>
                                    <path d="M18.37 55.1111H15.4082V36.72H12.4447V33.7778H21.3336V36.72H18.37V55.1111ZM30.2225 55.1111H27.5558L27.2589 53.0987C26.0891 54.3627 24.6971 55.1111 23.6145 55.1111C22.6669 55.1111 22.0002 54.7004 21.6731 53.9502C21.4811 53.4809 21.3336 52.7769 21.3336 51.7191V38.2222H24.2971V52.0124C24.3718 52.4391 24.6829 52.5991 25.0669 52.5991C25.6589 52.5991 26.6082 51.9538 27.2589 51.1004V38.2222H30.2225V55.1111ZM51.5558 47.4009V42.5991C51.5558 41.2178 51.2145 40.2204 50.6082 39.5733C49.794 38.6915 48.6225 38.2222 47.1558 38.2222C45.6589 38.2222 44.5033 38.6915 43.6589 39.5733C43.0225 40.2187 42.6669 41.2764 42.6669 42.6578V50.8231C42.6669 52.1884 43.0669 53.1573 43.6891 53.7902C44.5336 54.6702 45.6891 55.1111 47.2305 55.1111C48.7558 55.1111 49.9558 54.656 50.7558 53.7155C51.1113 53.3049 51.3478 52.8338 51.4527 52.32C51.4669 52.0853 51.5558 51.4542 51.5558 50.7058H48.5922V51.8809C48.5922 52.5564 47.9256 53.1147 47.1114 53.1147C46.2971 53.1147 45.6305 52.5564 45.6305 51.8809V47.4009H51.5558ZM45.6305 41.5858C45.6305 40.896 46.2971 40.352 47.1114 40.352C47.9256 40.352 48.5922 40.896 48.5922 41.5858V45.36H45.6287V41.5858H45.6305ZM40.5034 39.9858C40.1336 38.8373 39.2287 38.2062 38.1034 38.1902C36.6669 38.176 36.0731 38.9262 34.962 40.2204V33.7778H32.0002V55.1111H34.6669L34.9638 53.2729C35.8971 54.4195 37.1114 55.1111 38.1034 55.1111C39.2287 55.1111 40.1922 54.5227 40.562 53.3742C40.7398 52.7555 40.8731 52.1831 40.8874 50.8871V43.1644C40.8891 41.7084 40.6971 40.6044 40.5034 39.9858ZM37.9256 50.5067C37.9256 52.0515 37.57 52.5813 36.77 52.5813C36.3114 52.5813 35.4367 52.272 34.962 51.8009V41.6924C35.4367 41.2213 36.3096 40.7662 36.77 40.7662C37.57 40.7662 37.9256 41.2515 37.9256 42.7964V50.5067Z" fill="#F44336"/>
                                    <path d="M16 5.33331L19.2622 5.33509L21.3724 15.4898H21.5769L23.5822 5.33687L26.8818 5.33509L23.1111 19.3653V26.6666H19.8702L19.8649 19.76L16 5.33331ZM26.9138 14.368C26.9138 13.1733 27.3031 12.2186 28.0818 11.5129C28.8587 10.8035 29.9022 10.4462 31.2178 10.4444C32.4178 10.4444 33.3956 10.816 34.16 11.5644C34.9227 12.3075 35.3067 13.2711 35.3067 14.448L35.312 22.4213C35.312 23.7404 34.9404 24.7786 34.192 25.536C33.4436 26.2898 32.416 26.6666 31.0987 26.6666C29.8293 26.6666 28.8213 26.2738 28.0551 25.5004C27.2942 24.7271 26.9173 23.6818 26.9156 22.3715L26.9102 14.3662L26.9138 14.368ZM29.8933 22.6595C29.8933 23.0791 29.9947 23.4115 30.2098 23.6426C30.4142 23.8702 30.7058 23.9858 31.0898 23.9858C31.4827 23.9858 31.7902 23.8684 32.0213 23.6284C32.2507 23.3991 32.3698 23.0702 32.3698 22.656L32.3644 14.2453C32.3644 13.9111 32.2418 13.6373 32.0071 13.4293C31.7742 13.2231 31.4649 13.1182 31.0844 13.1182C30.7307 13.1182 30.4427 13.2249 30.2204 13.4311C30 13.6391 29.8898 13.9129 29.8898 14.2471L29.8933 22.6595ZM46.2222 10.6666V26.6666H43.6889L43.2853 24.7111C42.7431 25.3475 42.1796 25.8311 41.5911 26.16C41.008 26.4906 40.4391 26.6666 39.888 26.6666C39.2053 26.6666 38.6951 26.432 38.3484 25.9662C38.0018 25.5058 37.8311 24.8106 37.8311 23.8791L37.824 10.6666H40.7627L40.7698 22.8C40.7698 23.1626 40.8338 23.4311 40.9582 23.5982C41.0756 23.7582 41.2836 23.8471 41.5538 23.8471C41.7742 23.8471 42.048 23.7369 42.3716 23.5164C42.7058 23.2995 43.008 23.0169 43.2818 22.6791L43.2782 10.6666H46.2222Z" fill="white"/>
                                </svg>
                                <div className="social-subscribes">
                                    <h3>{result.Instagrame}</h3>
                                    <p>Подписчиков</p>
                                </div>
                            </div>
                            <div className="bloger_info-social">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.087 64H13.913C6.26087 64 0 57.7391 0 50.087V13.913C0 6.26087 6.26087 0 13.913 0H50.087C57.7391 0 64 6.26087 64 13.913V50.087C64 57.7391 57.7391 64 50.087 64Z" fill="#1976D2"/>
                                    <path d="M55.5274 20.1147C55.618 19.8205 55.6614 19.5478 55.6496 19.3044C55.62 18.5993 55.1292 18.087 53.9742 18.087H48.8142C47.5113 18.087 46.9102 18.8661 46.5594 19.6472C46.5594 19.6472 43.3427 26.1899 39.6353 30.5044C38.433 31.7529 37.822 31.7218 37.1716 31.7218C36.8227 31.7218 35.9417 31.3049 35.9417 30.1615V20.0621C35.9417 18.7103 35.6007 18.087 34.4989 18.087H25.3358C24.5336 18.087 24.1157 18.7103 24.1157 19.3355C24.1157 20.6347 25.8857 20.9464 26.0867 24.5869V31.6438C26.0867 33.3579 25.7852 33.6696 25.1347 33.6696C23.3805 33.6696 19.9274 27.8261 17.6154 20.1673C17.1148 18.6596 16.6141 18.087 15.3113 18.087H10.102C8.59814 18.087 8.34782 18.8155 8.34782 19.5946C8.34782 20.999 9.53042 28.5916 15.9854 37.3218C20.6665 43.6522 26.8337 47.3044 32.2934 47.3044C35.6007 47.3044 35.9397 46.4726 35.9397 45.1734V39.3845C35.9417 37.8243 36.3023 37.5652 37.3549 37.5652C38.1058 37.5652 39.6373 38.0522 42.5937 41.4609C46.0035 45.3916 46.6224 47.3044 48.5777 47.3044H53.7377C54.9361 47.3044 55.6239 46.8077 55.6515 45.8435C55.6574 45.5981 55.622 45.3234 55.5412 45.0176C55.1588 43.8957 53.4046 41.1531 51.2168 38.5391C50.0047 37.0919 48.8083 35.6583 48.2584 34.8792C47.8898 34.3708 47.7498 34.0124 47.7676 33.6696C47.7853 33.3092 47.9745 32.9664 48.2584 32.4873C48.2071 32.4873 54.8769 23.2331 55.5274 20.1147Z" fill="white"/>
                                </svg>
                                <div className="social-subscribes">
                                    <h3>{result.VK}</h3>
                                    <p>Подписчиков</p>
                                </div>
                            </div>
                            <div className="bloger_info-social">
                                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.087 64H13.913C6.26087 64 0 57.7391 0 50.087V13.913C0 6.26087 6.26087 0 13.913 0H50.087C57.7391 0 64 6.26087 64 13.913V50.087C64 57.7391 57.7391 64 50.087 64Z" fill="url(#paint0_radial)"/>
                                    <path d="M32 12.5218C38.4 12.5218 39.0957 12.5218 41.6 12.6609C43.9652 12.8 45.2174 13.2174 46.0522 13.4957C47.1652 13.9131 48 14.4696 48.8348 15.3044C49.6696 16.1391 50.2261 16.9739 50.6435 18.087C50.9217 18.9218 51.3391 20.1739 51.4783 22.5391C51.4783 24.9044 51.4783 25.6 51.4783 32C51.4783 38.4 51.4783 39.0957 51.3391 41.6C51.2 43.9652 50.7826 45.2174 50.5043 46.0522C50.087 47.1652 49.5304 48 48.6957 48.8348C47.8609 49.6696 47.0261 50.2261 45.913 50.6435C45.0783 50.9218 43.8261 51.3391 41.4609 51.4783C39.0956 51.4783 38.4 51.4783 32 51.4783C25.6 51.4783 24.9043 51.4783 22.4 51.3391C20.0348 51.2 18.7826 50.7826 17.9478 50.5044C16.8348 50.087 16 49.5304 15.1652 48.6957C14.3304 47.8609 13.7739 47.0261 13.3565 45.9131C13.0783 45.0783 12.6609 43.8261 12.5217 41.4609C12.5217 39.0957 12.5217 38.4 12.5217 32C12.5217 25.6 12.5217 24.9044 12.6609 22.4C12.8 20.0348 13.2174 18.7826 13.4957 17.9478C13.913 16.8348 14.4696 16 15.3043 15.1652C16.1391 14.3304 16.9739 13.7739 18.087 13.3565C18.9217 13.0783 20.1739 12.6609 22.5391 12.5218C24.9043 12.5218 25.6 12.5218 32 12.5218ZM32 8.34784C25.6 8.34784 24.7652 8.34784 22.2609 8.48697C19.7565 8.6261 18.087 9.04349 16.5565 9.60001C15.0261 10.1565 13.6348 10.9913 12.3826 12.3826C11.1304 13.7739 10.2956 15.0261 9.6 16.5565C9.04348 18.087 8.62609 19.7565 8.48696 22.2609C8.34782 24.7652 8.34782 25.6 8.34782 32C8.34782 38.4 8.34782 39.2348 8.48696 41.7391C8.62609 44.2435 9.04348 45.9131 9.6 47.4435C10.1565 48.9739 10.9913 50.3652 12.3826 51.6174C13.6348 52.8696 15.0261 53.7044 16.5565 54.4C18.087 54.9565 19.7565 55.3739 22.2609 55.5131C24.7652 55.6522 25.6 55.6522 32 55.6522C38.4 55.6522 39.2348 55.6522 41.7391 55.5131C44.2435 55.3739 45.913 54.9565 47.4435 54.4C48.9739 53.8435 50.3652 53.0087 51.6174 51.6174C52.8696 50.3652 53.7043 48.9739 54.4 47.4435C54.9565 45.9131 55.3739 44.2435 55.513 41.7391C55.6522 39.2348 55.6522 38.4 55.6522 32C55.6522 25.6 55.6522 24.7652 55.513 22.2609C55.3739 19.7565 54.9565 18.087 54.4 16.5565C53.8435 15.0261 53.0087 13.6348 51.6174 12.3826C50.2261 11.1304 48.9739 10.2957 47.4435 9.60001C45.913 9.04349 44.2435 8.6261 41.7391 8.48697C39.2348 8.34784 38.4 8.34784 32 8.34784Z" fill="white"/>
                                    <path d="M31.9999 19.4783C25.0434 19.4783 19.4782 25.0435 19.4782 32C19.4782 38.9565 25.0434 44.5218 31.9999 44.5218C38.9565 44.5218 44.5217 38.9565 44.5217 32C44.5217 25.0435 38.9565 19.4783 31.9999 19.4783ZM31.9999 40.3478C27.4086 40.3478 23.6521 36.5913 23.6521 32C23.6521 27.4087 27.4086 23.6522 31.9999 23.6522C36.5912 23.6522 40.3478 27.4087 40.3478 32C40.3478 36.5913 36.5912 40.3478 31.9999 40.3478Z" fill="white"/>
                                    <path d="M44.5217 22.2608C46.0585 22.2608 47.3043 21.015 47.3043 19.4782C47.3043 17.9414 46.0585 16.6956 44.5217 16.6956C42.9849 16.6956 41.7391 17.9414 41.7391 19.4782C41.7391 21.015 42.9849 22.2608 44.5217 22.2608Z" fill="white"/>
                                    <defs>
                                        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.2298 76.933) rotate(-49.945) scale(96.8981 64.0094)">
                                            <stop offset="0.073" stopColor="#EACC7B"/>
                                            <stop offset="0.184" stopColor="#ECAA59"/>
                                            <stop offset="0.307" stopColor="#EF802E"/>
                                            <stop offset="0.358" stopColor="#EF6D3A"/>
                                            <stop offset="0.46"  stopColor="#F04B50"/>
                                            <stop offset="0.516" stopColor="#F03E58"/>
                                            <stop offset="0.689" stopColor="#DB359E"/>
                                            <stop offset="0.724" stopColor="#CE37A4"/>
                                            <stop offset="0.789" stopColor="#AC3CB4"/>
                                            <stop offset="0.877" stopColor="#7544CF"/>
                                            <stop offset="0.98"  stopColor="#2B4FF2"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                                <div className="social-subscribes">
                                    <h3>{result.Instagrame}</h3>
                                    <p>Подписчиков</p>
                                </div>
                            </div>                        
                        </div>
                        <hr/>
                        <div className="info_chanale">
                            <div className="info_chanale-text">
                            <h3>Информация о канале</h3>
                            <div className="info_chanale-description">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda quaerat quod autem ab non, eos expedita exercitationem explicabo repellendus error reprehenderit pariatur possimus rerum veritatis quos nobis tenetur. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda quaerat quod autem ab non, eos expedita exercitationem explicabo repellendus error reprehenderit pariatur possimus rerum veritatis quos nobis tenetur. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda quaerat quod autem ab non, eos expedita exercitationem explicabo repellendus error reprehenderit pariatur possimus rerum veritatis quos nobis tenetur. Possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda quaerat quod autem ab non, eos expedita exercitationem explicabo repellendus error reprehenderit pariatur possimus rerum veritatis quos nobis tenetur. Possimus.</p>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="last_video-main-block">
                    <h1 className="m2">Последние ролики</h1>
                    <div className="last_videos">
                        {
                            arrVideo.video.map((i)=>{
                                return <Video key={i} parametrs={i}/>
                            })
                        }
                    </div>
                </div>
                <div className="another_blogers">
                    <h1 className="m2">Другие блогеры</h1>
                    <div className="another_blogers-row">
                        <div className="another_blogers-items" style={{right: `${distance.items}px`}}>
                        {
                            another_blogers.map((i)=>{
                                return <Bloger key={i.photo} parametrs={i}/>
                            })
                        }
                        </div>
                        <div className="another_blogers-nav">
                            <div id="arrow-left"
                            onClick={()=>move("left")}
                            >
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.99999 0.999998C7.23365 0.999541 7.46008 1.08092 7.64 1.23C7.74125 1.31395 7.82496 1.41705 7.88631 1.5334C7.94766 1.64974 7.98546 1.77705 7.99753 1.90803C8.00961 2.039 7.99573 2.17107 7.95668 2.29668C7.91764 2.42228 7.8542 2.53895 7.77 2.64L3.28999 8L7.60999 13.37C7.69306 13.4723 7.75509 13.59 7.79252 13.7163C7.82996 13.8427 7.84205 13.9752 7.82811 14.1062C7.81417 14.2372 7.77447 14.3642 7.7113 14.4798C7.64813 14.5955 7.56272 14.6975 7.45999 14.78C7.35653 14.871 7.23536 14.9397 7.1041 14.9817C6.97284 15.0237 6.83431 15.0381 6.69722 15.024C6.56013 15.0099 6.42743 14.9676 6.30744 14.8998C6.18746 14.832 6.08279 14.7402 5.99999 14.63L1.16999 8.63C1.02291 8.45107 0.942507 8.22662 0.942507 7.995C0.942507 7.76337 1.02291 7.53893 1.16999 7.36L6.16999 1.36C6.27031 1.23898 6.39775 1.14332 6.54196 1.08077C6.68617 1.01822 6.84309 0.990547 6.99999 0.999998Z" fill="#EFF3F5"/>
                                </svg>
                            </div>
                            <div className="range">
                                <span className="track" style={{left: `${distance.track}px`}}></span>
                            </div>
                            <div id="arrow-right" 
                            onClick={()=>move("right")}
                            >
                                <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00001 15C1.76635 15.0005 1.53992 14.9191 1.36 14.77C1.25875 14.6861 1.17504 14.583 1.11369 14.4666C1.05234 14.3503 1.01454 14.223 1.00247 14.092C0.990393 13.961 1.00427 13.8289 1.04332 13.7033C1.08236 13.5777 1.1458 13.4611 1.23 13.36L5.71001 8L1.39001 2.63C1.30694 2.52771 1.24491 2.41002 1.20748 2.28368C1.17004 2.15734 1.15795 2.02485 1.17189 1.89382C1.18583 1.76279 1.22553 1.63581 1.2887 1.52017C1.35187 1.40454 1.43728 1.30252 1.54001 1.22C1.64347 1.12897 1.76464 1.0603 1.8959 1.01831C2.02716 0.976319 2.16569 0.961916 2.30278 0.976001C2.43987 0.990085 2.57257 1.03236 2.69256 1.10016C2.81254 1.16796 2.91721 1.25983 3.00001 1.37L7.83001 7.37C7.97709 7.54893 8.05749 7.77338 8.05749 8.005C8.05749 8.23663 7.97709 8.46107 7.83001 8.64L2.83001 14.64C2.72969 14.761 2.60225 14.8567 2.45804 14.9192C2.31383 14.9818 2.15691 15.0095 2.00001 15Z" fill="#EFF3F5"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogerPage