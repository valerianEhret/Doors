import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door9() {

    let state1 = {
        img1: "https://uc42aff3cca74ded18b2b3f15a6c.previews.dropboxusercontent.com/p/thumb/AA0rC9Dwhs-rt-XoW0d9JjDX2HJW6B08DUPAfx6ieSoUtEQ-F6EXkxMdJjCObZXkDJClKDWpznX8Te32xw_J0THe8cw50FIJxh4TxM6vk5Cu65P2XN7GtBltGVuO1e_KDEPEti6aNpRsCfXZyj1hIiivxE5B-OWZ-lbDd6MpXUF-BGoLfGG8XhpEOrN_AlB_U5zeOiOg9E-pznC61HyEIdJPosC0mEjcfKIfDlcjYFca3d9sWsIjrmZCjXogmc42MYOjnjWYXfbXVTISDrD5o49J6q4EMCobOrprtOy_9BTGt46PAeuM45Wegg7UC6rTFcAnUverbiAw3k5KAm8voRhv/p?fv_content=true&size_mode=5",
        img2: "https://uc9004fadba38c57a136ca709ae1.previews.dropboxusercontent.com/p/thumb/AA3f8jrAXUnDFWD3z1zoMa4Atkgf1PZsR20AtS72V_gEN3s2pVwjhIG9s5646d2AWyEDMDoLWYHa5ogvL5x4KDO_4A4OC4QZMNb5BXIZ5w1Lg0AXAPzPRAd8EVz6NY8GZUWastXa3WURUADscEBsR8NvLZTzgCcMlxdgKGhG2vRKKsc33yvQBe7xdCr8HjExg_4SNy5XcOXY3VGxWFdC-rm-atiTJpBwr_mb42nemwiT1V4LZq5v1QCfXxwrUAXXd-Xc2Qh7w2kNE0O0Ghq9EIEu_rRw3eE5Nn576cMYNKwZsQdFK4lRy71lTfius4MTOsQ61jUjg1p4UsCjZcxlZBOj/p?fv_content=true&size_mode=5",
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