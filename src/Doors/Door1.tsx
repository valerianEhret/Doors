import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door1() {

    let state1 = {
        img1: "https://uc80eac8b3e710f6a7b02388381e.previews.dropboxusercontent.com/p/thumb/AA2SUEn9-yLXwtVEdcZpa7DbKWZ1hNoh3GJwUr7-4Bv0pGpVye1VlZD8odTAaESpqZCcaWZdK-Ezq-Q-AMHHKv852wyyhnF_MlRBcgsJanXtxvmqcjbEQNTpcOtHAtd-RI2v5VNtBINwieRMkNYVxrk_7jmxRzfHqN_aJWQM5ZEIasKq0A2T9OmKyrcLRkWhNrL_Blbqd95tCLM4qVAHsvnE-PynVoVw_2M69lP9aw7s76Q5WXLi2_2YhZOxd5CefNcbVZfI_UEoKnq6Q79UwRnoCxVLpN6Tqpn3geX9WMKMCtXCjNeaeknrdJwdYyZ6BAh7h8-1FZh0gMfKSEutUsFe/p?fv_content=true&size_mode=5",
        img2: "https://uc13775846c0ce761165d69ea5cb.previews.dropboxusercontent.com/p/thumb/AA25oZE8pXVX5P8QX4ZAmvZmTbwWn_lSzP0zu4GyBtHXTP-oH9rFXLRK9FgfQKnwC6fcOdtEEbCT3UFteVDav-LY7NX0dhoMjO8n03t3Ryld-YsVc6e1hRb59sv_Ue4rtZF1v-48hwkqsEDRLWw4ODrq9LcwppFFcmdi4uDyiVSBN5FmPrL3dvJ9geqbgxspkynW1T5s90y8zQUCHm8gikNEX8BtsgNvfXPr8rTgJX_jOL-AUm8WQgZdxhrdpHhooey4tAhe1hlkh3BPip2gGXkDLxm3dgEZmHFhIGoDc2e9otv0thRvhTMD4XX9K5SaNrZ5zGkczB6EtMKpe28nSQMV/p?fv_content=true&size_mode=5",
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