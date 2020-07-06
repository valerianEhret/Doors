import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door3() {

    let state1 = {
        img1: "https://ucb4df6d785a4ad4d689a6b85175.previews.dropboxusercontent.com/p/thumb/AA1lHl-V4VYf7qPsR_iGb295419-kaGpz48vANE6koRCtdlEmtpwWGv7YmHOT5ZEiDdyqcbsU901jtUVPpCjK3gzwQ0Z3KZA3R8HdstBsfYISl-Vy2lq5UXHamQfjoqhmqAD3aOxt_4S4Osj76Z1u2LGCh8Bajz9qW3CST5wRkXgut7oTppXoxT7VGd74HOnKS-xJZQ5u5zIPOqDJb1OZQwA6okBXvxP_lYL-d5uXZzG5gnmf46JECRXTlQWQyGspiYSKwEY2jEhj-CNjqPOGLntch1bEO21PVC-sGfIYHfmfNC12QEvrDPBuHUixamqaTHqZfgHvvucQ60x2hs9TZan/p?fv_content=true&size_mode=5",
        img2: "https://uc1fc55e1629ab79cb60fed92a2f.previews.dropboxusercontent.com/p/thumb/AA0RN45lh4oWAWYHfH13yMghV1k5TyhJs0IKLHhb4SEpy2sINQP1_jDe1JQyFWk3ZuryE2CO--L8Oh17FvTJ3cX9nbNg9u_DjkERbXBff7Hl_crLh3eRBTIQH8CM90SI4iH94wygtmPi28aPw65lKhkZqu2JJo5nwK7QqtcxBEExz9aprq668-8Pqzzu43hioLv3W89cwb2eTtUr38vh90uVXRHXZ84t3iyIx5H30wdawQXiOVm-tmYQJroqCDvJIv4Xp0OotXiH6Hg9YMwDV9PvvzWtmKx5ov-Wu3GWgaZP2W2PEOPn9EtEKwHBYqp9AKzi9M8dtNRuMzG2MGSVzVp-/p?fv_content=true&size_mode=5",
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
                <img src={img} alt="image" onClick={nextImg}/>
            </div>
        </div>
    )

}