import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door10() {

    let state1 = {
        img1: "https://ucd0115570413cb8092828c925da.previews.dropboxusercontent.com/p/thumb/AA21BzeCkg0ewjj698iWY0LcAIpNwnB0GKWVGKCZlkS9Knqzpo2sKUF8jpMaxfxwOx43Sdg665Aro2ZATYtT84TT7Dw6Ma9EaVpeK42BfvHnHA7NQLKrp1mj9ZC7ljfdiUsc47bBuoZ_ygTwr7Q0yQ4pOVqT2h_m0mzjerILTIR13bYk0vvaqWAQPmDkPLmxLjdhezpY8Yac9aAKsak0Fpuy6BwB0XJGrlM5yMLAwPFkBTEyBTHXooD13nJ_oday5zDU1gA29QkFl1X2NH-pnh189PZ8UCgWemdAsxNvadar-KD1l9GKppkfj11v3mcZuOo80T8s9omjA68q_rYnfZ8c/p?fv_content=true&size_mode=5",
        img2: "https://uc5c65286764f98e6a6611ab69a0.previews.dropboxusercontent.com/p/thumb/AA06TETgdFdBcsd_awNdKD59sJ5wKjCprpJr3ccS4BPrcl1XRqX6C2cRCMt5wVSLZA2PVKFeGpxohBx6xNV5G8W82QwrfrwXjgWbDeXRcxoEBfS0PNY8PRJaASADGDuE-NeBerZ2AktBKlvKZCFjP40d5b8fAzLuIBk5o15FMHLLc4s27fxVHWs5ZuEQ7d1JCxDCn4V8YpJ8BxuuBL3XNltb-wTYe5Kju4IkZavFKisYhcMauL3e1UYAMxxCIBjbM5MJss70zVzo0Cw_eDNsxjQoxLCes14jKcsHuJcH3H4SGq0zEnHMBXi5d1HtNUO0m3hAmoNdcLmZyz_p5nTVBaF_/p?fv_content=true&size_mode=5",
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