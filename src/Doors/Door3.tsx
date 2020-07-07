import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door3() {

    let state1 = {
        img1: "https://sun6-13.userapi.com/JpfQSUrUv-imjTNiXQCf-_e8Z_N5Mpph9HNaQg/_q4lIb9O3QM.jpg",
        img2: "https://sun6-13.userapi.com/TT34bhG-Hx4mjjYScatHWrU364tMYeswsf7I7A/kMONoyN81OA.jpg",
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