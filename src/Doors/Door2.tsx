import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door2() {

    let state1 = {
        img1: "https://uc033f430cb905ba391d03431f58.previews.dropboxusercontent.com/p/thumb/AA0i14zzpA66lmgd22ktaP0ae92LG0R2sM1G0-kDoG0A8PM8m87HI41ejGZ0RD6d4-pCmzWpzc1rfS_tE018bLcyokF1BCeQHYTn2w20sZEyIfcWJeycnVuvyzD3EoATyFa8-Svp8_8fy54-KRAnjbIGWuE2ur_2P-ZSsj-wigSNUFZC5_mxuIctPxPJwJ69I7hNCEl6j5ArdVjwhDB6XWSprVNBWlWIIZs0kdDkmLYFiXQAKhe4jn8uJlUbJNo0glF84I-396Kf2mhUkfAKaE83FNVu24gzvZYWSADncrqFuq8vWo5PqvOGxK2-t5V5clJ7MCtFt_djcheat2GN-7Pv/p?fv_content=true&size_mode=5",
        img2: "https://uc0c9ae0ba39a8aecb4cecc020f6.previews.dropboxusercontent.com/p/thumb/AA1kRzKa2rbkk7ZmeGYSgD-ImiN70ykqCHQDE_022K4pud79OC87NXvQnRyiDBT8uTNVAZZCNY46uY0ZNr6yr0OVF3GUeQ7UENGzdLq4twHFhD1r_jDDhsCeZLPP84HDbZNaEQnDFnglsFyoXkCmb8_vrzU4pJeorv1VetiWOiVNoWOV5He0V8hatOd8OL9SZW1wxU-gGBsgIvYAkI0iH87UxgZ07qxpGzN26AQrMu2WJUHZASoNl9HFPGR0TMmenbpdDpvA0PpQfHXTRa7jdRWhA8x-9njgK9VcIX1BSCY0SMX8ib9hI_63AvxpiBoP8_lPFoGmk5B_EGigo96LmYXQ/p?fv_content=true&size_mode=5",
    }


    let [img, setImg] = useState(state1.img1);


    const nextImg = () => {
        setImg(state1.img2)
    }


    return (

        <div className={classes.wraper}>
            <div className={classes.box}>
                <img src={img} alt="door"/>
            </div>
            <div>
                <button onClick={nextImg}>next</button>
            </div>

        </div>
    )

}