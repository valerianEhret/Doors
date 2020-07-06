import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door2() {

    let state1 = {
        img1: "https://ucaea102f9de1bda646a78853247.previews.dropboxusercontent.com/p/thumb/AA1hqxoQtHYFw-3CqRDYvsJXINuOvXamryG7sAvVLzAsAkeE9bBmqPratADfEcSLtZX-1n6tGkfkl1-3blMvnEmIMVDyJicwiMT_FE7YRASTJr5gb0x877RuUSMI34I0zcHS92vVYsS6hRwMg4cloiOdcO03OTa67jPX1f48z272QR-KPfMLUXDUCAIoURvb6x7yjuvi1nv_E6M1n5Y5M2TcU7Yzl-ACucOvzharJySAjwI3GSBI392DjhxKm4QYWvIgoMqOB-_M8VvbjJD-C1Z4O4UZGoFUkqupLR25XbC_lNTssbfeFHw7HGEpLLXgP2Gm--RSccke_9BSQGORUN4e/p?fv_content=true&size_mode=5",
        img2: "https://uc8a65e40f8fba92d6305a8e071f.previews.dropboxusercontent.com/p/thumb/AA0urglFUdhJ3Kzugn1yeNxA-68drhYSX-iwqFrFVI_SUgTq0wT1-w0_sVKL10KqGZtn9OmlNEj773Ct2E-haYNYpTOoifEvaCwmIeza09pnV8rL-XBYlNVQtb_vFsE3MQE_zmovzDPnPNBSXBMdkrLU37fqxF2zmOabXyByXAKNxTRxrfIh4LDUIpzJqVob-hp3otM6M2o47bOpxG2ApWr93GL1nNaqZZ_NsZxVkxC0UuQZEyENsc3wcxDDmpUgtv7TWk7D_9JFx7-mxhZPK6q4VM3neZUHzlC7gfWoIcvPwhaYJoU5a-X2tca4M1wp5psiqm_9B5gg5PCzAVI8iwnA/p?fv_content=true&size_mode=5",
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