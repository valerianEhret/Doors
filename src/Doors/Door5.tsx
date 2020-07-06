import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door5() {

    let state1 = {
        img1: "https://uc30734da95c82689a8d16a8eb49.previews.dropboxusercontent.com/p/thumb/AA0zkH3nPNdg49Si090DRMed5qQj-6zukR46-KoEB7u_XyB8joqG6gnnBuFNx2Eee6wcJhxbS_VJlftaN57QobAnwUQtnYDNHRLcB8bRbqR5kEPzcY9ePy6vqbSVWAcMZwA2qFGE0OwCt7PsqMLSm3AxnpHNyZ41WYZVDu5FA3j07pE3D_gbZFgXj52TjDWKw9x0fru9JZF_5-Mj_evl7_YH_pXdkk6UFWCU87xLKKgPCCYW25nNb4LAmj1mmXqGsaFC2qZwEh714JLv8D-jVKjDkxx8yYuJg-g99mlBlTFNH-pLNeBpI1PyF9ZXIt6pId4uHseuMxyvp5t8uJhSqct-/p?fv_content=true&size_mode=5",
        img2: "https://uc03cab66994bcc0c80262e54d0e.previews.dropboxusercontent.com/p/thumb/AA2lcYFjSaBO7OwCR-301Mv_JUsTWU-Aiprma0bNGUKxyeN0kcSK7acVMT4m-IqTmafTncluSFfy-lbV9PZ6qJET8N8Fai0oHb2NAldigE933_xOeNgXSsDznYFY9-PeqJpelEk19y6C1XgzS7Z2-e3GcwqyiPexcXtGjMY2IeC3vFiBs64D1U3QLIanp4ldp-KRuGOiXe968tB6hF7Z15CeGp8_afZfp_i_dwm0a5_KGuuVWUrRVnE2K4VxMHTmm8cQmG-Jfqni57DVcD7QsAJXjvyqp7fScJnUScgh0OV9XLheoz0oAsZF8YNrT1uovo-yiNuiwITxVAPKub-S8yx_3ra9wCRim8L0AagolobvNenY9T3oexuwHw6xWD41ZoZHa-RuoWxw3WKOpIz3qkuI/p?fv_content=true&size_mode=5",
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