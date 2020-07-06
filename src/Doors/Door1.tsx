import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door1() {

    let state1 = {
        img1: "https://uc8eda54aa0c8e41f7487d8b6a32.previews.dropboxusercontent.com/p/thumb/AA3pwpk8vrOtcnHg3lxD7hmUC8hGnGCF_rHGYlkISC59xqdtFSPfbsw7e5Yy2Pc0J_X_DtEkEQu-rYTzc7UZeU_RfJ5yVrJ5zQVGJMBz5oNCjxq_A62tlC5XII_35FkLGcDIfJinsZPzmhYjN6agzieSKRium_6Jzf_X_rcSYAiFQWxcgccbZWm6BR58DMGty0Uq9PjIU48r1UI5TH31JD3RlEBNfJ_uF8LZN5oB2y0904xIx-bNTRKQVf2lG4GqAB8nBBLQi8hTXJxnRXIpjHtCWOS0mZ-kJdT6PmK0c-0C1qQXaP94nwXXAtZAwcq-B38ZNjFSQNhk6ZJheGtHTyfy/p?fv_content=true&size_mode=5",
        img2: "https://uc868671efd8487135cf6112c405.previews.dropboxusercontent.com/p/thumb/AA0GrBJwBAAB2ErLEDcywg6csxnJFJB7pdtckMAhkEbaR0botQdjiKL6nTvCZz2CYsDzur8oMeE-t5z0sQFSLN3K56CQG2vtQu7G5CNHhSOh0Olgl6otbSHmyuF_fscPmcGDplqLDKJSqQWNzE4IE49JTnlOFrsT0OeYJN56jE-uNbNBjClmOI5Fqtoe5ThS7-ZXLiCDMs_JJ-DhHMDFNrCgfqieeVVa7_bIb80ARaZ4uvdX8f1jADfdDVxGqOtLI8LOfOdsNGCrrZtzAERnv2BtWNOw5LpXS7DKxupmDgqsPh5UIZsOWGP6K0LqfQ0LIWLW3DmswnL3k-jI_dMfPOzp/p?fv_content=true&size_mode=5",
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