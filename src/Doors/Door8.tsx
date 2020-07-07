import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door8() {

    let state1 = {
        img1: "https://sun6-19.userapi.com/xOOFqDHClHyPSWg6442ebldUpaktbjmqk6HyTA/oT5FfNm3mk0.jpg",
        img2: "https://sun6-13.userapi.com/WFQGJi6J6vAkqBmDClAsUuIO97Wzzq2mCvmL9g/QF0Ya3FbCns.jpg",
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