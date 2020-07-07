import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door2() {

    let state1 = {
        img1: "https://sun6-13.userapi.com/TOwr_ojiByJ7JW8afriQGBk7m9gzLa-LSaKxLQ/Q1vly5hJu-s.jpg",
        img2: "https://sun6-13.userapi.com/jkozKlmozyY6IKMZwc6W-WA5Tp7JfUAGojnXeA/-l_kdt4DS40.jpg",
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