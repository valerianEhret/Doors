import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door4() {

    let state1 = {
        img1: "https://uc4034d50415623e4f4ea415bf9c.previews.dropboxusercontent.com/p/thumb/AA24YgpJRQqFCq7MtE7ZSK5odqRtcqhyMvJ4gjjxqg8NnuYb7RrrA4xx4mde5uuBbEbDvNUpqKPPSDMrJYXUMRaP8V51aRraa3d1IR9VWRGpkkZVql0K6tr4ZhrsBE5nLrjBJg94PxDS6mLpIv-ZYelsTThf6Qp6Qj_JN0e-IWqjr6W7fF2MstZwXl1fHH9zsV6ZE7mvk9c9xkbtDWiISEPRgtxkFlw82X2VQ8QfLhKEr5x2hg5628f2cNhpEHmdN9UWU-xyo2j9aEb0K8pyGIMKRK87deOVLLokhetq5qn5i6wQOWFkv-QISDouEYEohwh9tz0k1o62Sj-E9SJSWX-n/p?fv_content=true&size_mode=5",
        img2: "https://uceec25de30ef4727bdc6d56be22.previews.dropboxusercontent.com/p/thumb/AA0_0NLVajYBRgbzRq6s5PuxVF2G1S3Q2N2UZIU8rw44kR0vgoNlDrPk4bg1gumJHk-kSkKam9kQgcns44FrtmFH3d4fT04Pau1yubbPJgsqk5v9XHe7KXmb9gf7M61-3zotrMFr2k_21tvOhs9wrZtqEhE5SDzrWnikjBtHLNJ7envOw3PRSYQ558XR7f5d8kto2crePjY0rO3mATGIH5ZYavfAUZe3zYjjpErUmPZhkl44Ee1cDLmd6lY72xYCVKpDpnk1MwbLg9znpLX3o7ev6Q6p1z3Ely4gqPLutIETHb1mlB2Oi3Pg0HpxnjJKmxWZ1Q1CAr0eLHjEZngPbcm4/p?fv_content=true&size_mode=5",
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