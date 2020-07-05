import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door10() {

    let state1 = {
        img1: "https://ucfa3fd5177920fb01b13e155e56.previews.dropboxusercontent.com/p/thumb/AA23NMwcBaAczCBcdDcRv3W19yPbIvxjCaYuirDxO-hFt8jl1dv0qEePm5pA3Fu_-dcTICAu0HKhNGFNNPnuWWvZo8CeB_l_bwdXaDSIAzoGIl1Lbhxdy4kQ_QI630_tw8a7behsuaA39KtgdtnrrPlFOA9N3WWhAv9sUA7QwcGrsCC1aulPPdloFNta76dsVm5BjkzNT-zQ29xrv4TskCnhTn2cRfAwf6VF-u3ajaVl8BilQNb6y1u6HNAgVcEJ1GCfpQlU-0QRWizSbTKKsNrQB5wZkCDrEtWvVispMcD_ebK7IuqxroFdgFlpJn1igRw2VVYx1rEVOU_pmYYRbeam/p?fv_content=true&size_mode=5",
        img2: "https://ucc0e692bcb0fe4c1fb1d6955283.previews.dropboxusercontent.com/p/thumb/AA3vi5cPKe5phdHzWLi0SI7VclzQzaeBnXPEKHiUnWY_qzEeVvxBhyyV4RNTezIQozjOnuyk09bi3eecREvlO-HAEL_amzwts5Bjw3I5YQ7zEYzrLbqtZRKjnklAXkHzmpvlqaqivB2zvCn8TBMyi7OrjyLCYMxHz6S5NuNaeCFbUcU654_OCqCMIM6BvHLc7_SSNHKmI7btuZFLCXE3SczbfSySREW8kEhiSVJYzV4msqRSdqMQyi8o7C7AIyudg0J9KfBHyzrPPpvp02e4Z3gDouV65MMjsvHjmoDczEV9W98PTUxjRWno8qlFTw4aSfBNbFaPjztcBBLtVxbgbKiO/p?fv_content=true&size_mode=5",
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