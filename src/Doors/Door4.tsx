import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door4() {

    let state1 = {
        img1: "https://sun6-13.userapi.com/_7qSXgxQ8sXIetBbZOOe0Hh8A3ahpk46t-xaKg/MSVcJ6V-okI.jpg",
        img2: "https://sun6-19.userapi.com/HwVtJ5Zscc-0rW__q0uPmlSrtfYTj4wbIvy8-g/VLY4PQYQS1A.jpg",
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