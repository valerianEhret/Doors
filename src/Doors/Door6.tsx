import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door6() {

    let state1 = {
        img1: "https://sun6-16.userapi.com/DR-3QoMa33Bk-ONddvbAGy0RZRn6MQCJDwPVKA/J-QAO68H43E.jpg",
        img2: "https://sun6-13.userapi.com/xUCCtlUgRuzKXutWpanpObGVma-bh-QTYIbqrA/i9uopTGfJmI.jpg",
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