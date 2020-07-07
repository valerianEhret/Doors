import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door7() {

    let state1 = {
        img1: "https://sun6-13.userapi.com/Mj4ZXDmS7i0eXAB200ViPZCb4FPCs7WLNgmopQ/kRnaHRnT5zE.jpg",
        img2: "https://sun6-19.userapi.com/ejbAcNAHZY0HwLbmThHsJjswqfiLMWm3bPin4A/VT2srkV3qu4.jpg",
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