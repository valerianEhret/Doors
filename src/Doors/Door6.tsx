import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door6() {

    let state1 = {
        img1: "https://uc8658c10336d4afe1c38f001159.previews.dropboxusercontent.com/p/thumb/AA3f4l6-eW_W3VBLHpg9pzA2-fVjIfU5TvMjzoh6YXtgWybqtd3B5fyZKKFNGFN2cfJKZdIPEt6kmw7y3mEV5fb2-LQEDvgwLd7gI0eQ3cpEQbKCZKDqM8_-yaTQ9S_1AjIZP7T1CooyoKP-XYgOlie1HzkToRrMseJ2PTLvINAgQximwL26Sw37FxvFc-GNOyxDJv1q1Ltv0a0mHcJr86FZGJL0n8RcHJy-whd43pgY6Bq1zqbfYi3yW4thoU9NLO-7aO15I_YQevI4pL0C0yZyGQQYscQPufEfSMGOuAHf-x1jhRecFil8m1Xpy6Zu0XhN3jNOfdXQUL57ta7PYyb_/p?fv_content=true&size_mode=5",
        img2: "https://ucf88f9e3eceabce1053ef713464.previews.dropboxusercontent.com/p/thumb/AA0Biv4zxcBTL6AF1aDAa-M_HWkFYfAaoDfmXI5CXg2bOHrMNTeI8oJikhGd090N8pdhb-zlWqEq-4RQVL7-eGmT9SScWVdpNgSQ151Z681ExGSlrkKz83c6nG0r53bf4s7POi7r8i3K-_25EeHE-6Ly5ukhknyDNagN6towAv3zzFnvbpctZNCu9MIPsvWFsso13PniplzWCaH5ey3lBbv_RRylVsIfonp4Yb04BhFOv-6sE79sP4EVtnam_HlbKUmQmx64o01fV-IQ0Ne_j7P0q1DProYTE-Mn-qy2fciaXnMwNVtOw0LoRDflH5anTFp0ovhcldivD9AWEPVdsaro/p?fv_content=true&size_mode=5",
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