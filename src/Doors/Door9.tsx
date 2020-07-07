import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door9() {

    let state1 = {
        img1: "https://pp.userapi.com/rdVHbAwRcK4pwyVTjP3sLsY04g0mql21dCtG5g/vLFtozpP1tM.jpg",
        img2: "https://sun6-16.userapi.com/k7rib-sbhfYHHmC9RA1m2MvKnQTz58WjXmYa4Q/DjQoor-YVDU.jpg",
    }


    let [img, setImg] = useState(state1.img1);

    const nextImg = () => {
        if( img === state1.img1) {
            setImg(state1.img2)
        } else {
            setImg(state1.img1)
        }
    }


    return (

        <div className={classes.wraper}>
            <div className={classes.box}>
                <img  className={classes.img}   src={img} alt="image" onClick={nextImg}/>
            </div>
        </div>
    )

}