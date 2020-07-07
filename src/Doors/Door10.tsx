import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door10() {

    let state1 = {
        img1: "https://sun6-16.userapi.com/OQkwCJvWxFHCun_ydeR6lfvyQq53PnkLFVXx0Q/e87-C9dIPsM.jpg",
        img2: "https://sun6-16.userapi.com/35hKOqIsV-cVfbkugEYDEo4PKQxeMiA1ZQ530Q/cTSe3Ef13Rg.jpg",
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