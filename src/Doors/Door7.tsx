import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door7() {

    let state1 = {
        img1: "https://uc5bd01edfbc7abdd89a79165709.previews.dropboxusercontent.com/p/thumb/AA3wIYyC68S52WxqkPya5ileN_SXw9jRclwEHLeEdawpSyu3mVK-SdRHSHd2-XOVxK-ksu5DqoMHa7vEEIklUqY4w6J6gslnJ-8vy55r6eOr_dE4Pq6IVPxuujGbsuigelVXqdQ2_hcgAM_mtAnfjcEQQqOKx5248oO-rIOrEZOzb2XV2ch_ycFKfm7d_hnMeYaxyR3R-0zTAqGeYmk1T6mNuYJTjT2gppefl-1W1B8MtJFv--DoyzAjR6kxhaf7BnX16gEulSww2O0aejYBlZVOjJwLo_aFvHwrAMUKHiZtyBxJal--dJRYNj89u2avUHbzpqrbs9XAiEH8mtQjyTAm/p?fv_content=true&size_mode=5",
        img2: "https://uc4873b477ca99282d8a841a3c62.previews.dropboxusercontent.com/p/thumb/AA39YuTMAM_u5SoLCVC33FfeXJkWCbMGMI-J9lGWtTgN8Oib8q7rxqQwLQNEhxkg4s2VFWtBd-c7g5etyb9pFHuZqfuNMWa90MtxbtuiTJluYR5tQkPJmj5RLV338E4DUKOiaD1Hg3InqtBgv3DuUh3VtOi85BTMoH7J__D0iSTFhB9ZU29IFnJZIrt1afRUlvwBfWunV4JCm0A2kJBioSPlcIdSJAawcx3uq17nPFC9eY4O0uNQpXHq2G4uPAbfD3ohVG4hpumo8mHL_YTI7W9pSe-kD4mIlBDhmmYyrHxeAfb0BuN3VU9MikXj7dlYR8jnkfTub-hAACiiM-xjIFJw/p?fv_content=true&size_mode=5",
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