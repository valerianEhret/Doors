import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door6() {

    let state1 = {
        img1: "https://ucc6a58402ca3b54e3e65cbc4e3b.previews.dropboxusercontent.com/p/thumb/AA2HOq2AyxZphHdtl3t_A1DGgSjZFccLoM2T0dbxAuHXF38Q1-rpywoNhO984LJIKQqAQ-n8ZAZIPE0H4f4m9egionACC9zEofWByannP-kbaaHaGuIwkmgP83HZE73F8Qgwae1z0InQ_6kImtCnzmfhjHshT3YghF6ThPIgWiZZu8FzJB6m7G-i_sJSfM28K1w4qE2iKSr-b-9NVf_U_gDCD2a_UIwRgehvmc4HhdsX3DniK6yoGLRGByxEF9d3EqgfmigXJJN3oJvWnecYqb0iy4bJ4DRZl-Hi223BBBzI41Fo36e8nZ0ddSRLooTmC_gRVGWkZROcRmMbm_irTbY_/p?fv_content=true&size_mode=5",
        img2: "https://uc5f81b75b7498305b5f0586b0c1.previews.dropboxusercontent.com/p/thumb/AA3mQTricVTt6pSH7dSKVker28AV2-6ZQ7PNNKYOvr0ys5AFGnwm4UZ80Ses9tnrAL_kpbZXhP3V-BJBP3YC2ItSXjilBTQbDD464fNVzUmV7o24jZism-XGPnIe2RcGivIEoaFicHG5LgIWhRbQ8g7gGJm-nQUyPomuJ4btVI4jQi9C6UMHRFeIgX-hQC2P0Obb4Vb4gKRXMIbpzM-GOX5wcBqf4XJHQJCNKEpwApa_j3eGPcUcmn_HB3N_92Bww8VPD0AqLcd6DTj9HxErTEhwFynyWyP6L5SybRHgPHoGLOOd7jAZAEYP84WpWIoQqdq7zr_E-PrUqkq5F5L4MZFu/p?fv_content=true&size_mode=5",
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