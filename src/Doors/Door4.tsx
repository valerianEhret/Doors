import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door4() {

    let state1 = {
        img1: "https://uc5a8d025910ccd238dc1c8f6729.previews.dropboxusercontent.com/p/thumb/AA3KfcDwg6iQfakTo47xYIuA4hPpIF6Y3NhOQ4Ml7acB0JApiBTrk5V9-6-yFx3gC-2VYlw9c5IRGPryET2CK88QjRDI6NMD1IXdx96p3PZaMTt_jzM27MSu80_425zTEoRkmMCfDW8vQpQ2O8OblwMqhkf-WibIAEwS8_qvISZ6NSp8EvEWbNx1nPn4Ll4NtcazeRpxzDToNY_ge6gA4Dv2GH2lukmgA7E-NcSgFTBPviWsoRiDI9yBI8YMLU2YlipJ2M5J-dW5l1KdLW-gpfGKU2Qjz77cbAlasCXsVNVJtSaxxO6y74FB_yCeXuU3xsIyjVE046NjHkkFY47llH8V/p?fv_content=true&size_mode=5",
        img2: "https://uc16f3bcd6d10c95b6df2c5daf16.previews.dropboxusercontent.com/p/thumb/AA2qszHd5HvGqE5aMGuWIZk_4fmXJ8qAKCmfEa8m0xkiYy3nkpJS35DrTE1PsVQy1xKjwjt5SiauFVa90DHovgKdIn6_je4EHY3M-56zm21ExJN7-4jC82u1lvpwxgI8bmB1QtAEEWKOoe5yRwHFMtwqcmaQlOhdB-WkZKDXRfEz_Um0Q04nemCLXowpGbIasj4BBvr_vQXWb0mV9zN-2VbobAlyvZUzt4vLdk-oN8owA7_l9qdWB4DFn5d6pi7xDWuFQMBIcFXYQWkRq5b_mRDuxB41PG0Wtg8UktqfUaAkuYvodqoXH5Bi1a_c-jw_f4pF1ACebbqPi1RePJ2hfkBB/p?fv_content=true&size_mode=5",
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
                <img  className={classes.img}    src={img} alt="image" onClick={nextImg}/>
            </div>
        </div>
    )

}