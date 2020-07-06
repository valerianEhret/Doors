import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door8() {

    let state1 = {
        img1: "https://uc714df713fcf212fc56862a9620.previews.dropboxusercontent.com/p/thumb/AA3dXuqF-gJLlx_HFKDaNbPPO36WAvpXOD_X_xuGJd2HDSMtX5gc4Fug3teWfHwXI2G-Ng5xaaiGOpvbhiPwgdXIMYtImJt5oF3xq4REVc5g3OCx9zVP94-Zpi3MB8ps23fV-WPxHzFWf6Qnl_kdLfEA0KTT5d9xpmDm4pw4kN_a4COkFvapzmKFqmT61PIeva6GxKY285vukLAxyko4FXETZOYVW4NVjLFs7x1Q3SmcAPuC26uu3tqZHg2EYW7giT7dh1KJKcFBt_6leTQrtGZRNb6KO2U8EzMT-6MHFkXMuhUA_2Y_i215g8OcVSKisGWlCcpdkvTYYGcm5oHQrtmj/p?fv_content=true&size_mode=5",
        img2: "https://uc9111504450385b9a6d211a7e5e.previews.dropboxusercontent.com/p/thumb/AA3EY_R8HujTRH0WbjlGCBVAMGKsXkEWz8uNnT7slVdjt8crqfHBc6ptSDstlochUmxryTrTGXuw5ew5_vunCnrY2sk9cfljbAYIAVanfUpKx7gz7asKreGOIpjuVkrDV8nmORvX4SBRherGuUdHTj-Uf_d_CQne-oEDpuSD7iieadlkejLoQkda9vhZG1h_KFv02NWfaHZ0t0AbZDo6ClbMpFXV9Ii575e_FzK_kBNSG0KKE_zXJcmCpOq2pa7eaPzQe_x0s2h8zZfpGqmONCbDEWOr6a6XKZAVlsuPi2FEsY5MQcNZRNtO24uY5REgDvtjHsXJcGruUrLI55RfV_1M/p?fv_content=true&size_mode=5",
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