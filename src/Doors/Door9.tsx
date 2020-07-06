import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door9() {

    let state1 = {
        img1: "https://uc9c77ab4a694d858a0b82b7d219.previews.dropboxusercontent.com/p/thumb/AA0dAjmsTkUEztRfAUOruXhuWYhT4X5vEQ84FL41cxH5Rpb-gofV2A_mxc6riTdDT6hP3PtLEJv3F62--5A62pB2BtEaFe16r13sjxi4eO1QgOMUQu5INqZ-wAg7kQ1Dlq3P_m_VFbRIIi9oTqaNS8qf8ASvjqz7wdGbIV4ADe3wILY6dJuwsfd6vcxBI31Wf_U6KWIA3Ap6-s2_eWQDJjD6n03thjbqEDXKIhY2WgV5Pdg4GVghpD0cznmWZSBx1fxbXTOafx2O9_m94SNrCxjRGca4IvZrQvKlfHuGDRjtTjhM9Dr7zHxxyWSdSZC5nOYjk1-MJTzFNgSpAficTAck/p?fv_content=true&size_mode=5",
        img2: "https://uc9e3f1e8279cc8d1b5875860c3c.previews.dropboxusercontent.com/p/thumb/AA1eEI13m3xuM4Gm8uZL9M5oHNymYQCZBPomH4kn3wvAonFvsX6fMR4JvN96meS22vhREAQKpfPOp-IIpYD25YDg1nCS1o4lyiG2US0FHlcba_8I_DfUs_ZWLu32U6VICEgq1_GykZk7EyHSccRTyr02fsvB3yeZZTGrzsPnxS7wYaVg-8ih6EEN6yAupJO2aNghMmo7KTsli-BimXFs71zj9LqgFTbDvZFL8Sci-P2ynYygTN3LuMhtiy-qFhWGrJoxuqLatFJGVIUMifvZXPl28Uoidfc6ScSnp86oDmziGgx2T_kf8n524Mi2hGjWLuT6iisn5wPpDpg-ybbcgMcP/p?fv_content=true&size_mode=5",
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