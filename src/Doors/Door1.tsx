import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door1() {

    let state1 = {
        img1: "https://sun6-14.userapi.com/Svi3UcTZgbKI-hwllsSWI5isi1T9kLQnwpNuQA/jPA0DVk50ac.jpg",
        img2: "https://sun6-13.userapi.com/3o7uF3DzJ8iyzy4vJatl1DBBSJ9A3pWShTjttg/x_F-vCGF82U.jpg",
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