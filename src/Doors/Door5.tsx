import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door5() {

    let state1 = {
        img1: "https://uc0d3f8af7df418f93aae611795f.previews.dropboxusercontent.com/p/thumb/AA1apHdMTBMTUmgB_4v-IUjsBW8i5MX0wT5cddW2FAKk4AvvM_Z2_G76KAdTCP1jw66uJ1i3my6iRLXIC4_w-zNRxaAru71_rar99HuoVyE59dVns9y6yMMv8GWO2xrPWZDw-UJ6YA5CWn8VPlu0Jy1LqNJm--NXIsL64pI4kNdlwagzE68VY0zzjSNnYiXBj5Q6QnoTuNaV6N4S_ZmQXAJxdQl0KnxW1f6Tae4J09hz263qphu89cwanRs6RyYlQ__6XMdzC_tIMAunWZKdCWV55DG60laVGToDc-OjgvhWwpT0tVTo8nK9r5G_Ff3WYUzVDvR5JIPPJLOE4IEJlOre/p?fv_content=true&size_mode=5",
        img2: "https://ucc58a49f76fa0069a4487fa4f5e.previews.dropboxusercontent.com/p/thumb/AA3dBhrdE6gcaCpYoe5-HMsP4Hyh6WtgL1zp9q72vEtnprr2MlUxh_fHFWjILq2paVnh569p_nL6_YghvKqkAAgXlILoMhW9zpaVkMdgMZDSUX_wbMUoxBPX3QPEZ6q6s2Q_AJWtXmYLhLj2DGTOU8hKLxqqNRQkPa5dsc6BQtZ9UK_3jCYDfrkeJfj9honrh_EQe9YtZ4PgSTFI1SN1w2ypnrUsYX2hLpD1SOCtjweJtRc6lukNFz6ZRyDG0KCdh0lTfx0NGJEOHm3NOeY5Vdic1iUsdJTk4Cfgit-YEcfwbthNG54hlbR6UoIBSnbbltfgLvjDnHludSWS1-YZaXS06QngbDFAiJlYOhBCd10d43CajJVad6-Zo08OxmJHEquAMogXCyZSt74gbtKc624H/p?fv_content=true&size_mode=5",
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