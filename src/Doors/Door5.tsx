import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door5() {

    let state1 = {
        img1: "https://sun6-19.userapi.com/AU61CX0fp4JNmsoe1e7dqlUy4r0A2WIer1h99Q/hkwdc1Tu7Ok.jpg",
        img2: "https://sun6-16.userapi.com/3oLsvfA5uyofY9RCaaF45JYO_JLsGUQqIZwOfw/maHJyvP31Cc.jpg",
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