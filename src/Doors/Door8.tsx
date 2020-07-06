import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door8() {

    let state1 = {
        img1: "https://ucce74c4b014958fa17fc1ff5b25.previews.dropboxusercontent.com/p/thumb/AA0I9Ga3ScBm-NvDRFRTwUISOqkguKz8TehppkQVtq9Cl4YvsUtqiHvlye3YNsiShD-psVlKkynGG9TQ7WCOZMBfvnWNYOKzwScllfwjhCyyugcS4hN-lrE7jFwooO-UVmUXMM_KdDomqeTErVF_b0u7DnyFJFHRpqmtxb9GLEoBTyoUmp_1LimkxEKGe9YU4f51XwcXAqZRsupZffn95_T7tqt_qGkv9X2zQQo4LRnu8d8IyQIBjoUHKlO3I-06-8uxCzECTDzLe1qjW83qd6mvnUzBF1ZJ5Kqot2HMdc-GXcNlIL04wthmUDiY0f6Kc6a3mB1LbG5j5n8uwVE9pEHc/p?fv_content=true&size_mode=5",
        img2: "https://uc8741376879638c65739cecc426.previews.dropboxusercontent.com/p/thumb/AA2kT6cVa6bWJ7_GIDa9cg8pOl1qPJSofsjkNzh0doGvLJWCGepBBwqM-mGNUbDhM-obHUqcJ1DAz2ptUEEYtMFE4zc8jq1BbhQB2G6tnCpaYB0nPrO0eCGP2-N9FSgwH1EFs38Mx1hTqjLD8AZkr_KBUrbTum5sIufVikTNz5sx5lhM46X8LKLSVuMJwaxgLG6lOWGH5nOfTbOpbuYUiH1-e4MjC-qcHl_YB5670XEottW-Jdnk56i8Xxq_sCA8tLsrLGGVW0RXGtdD7UGojUl17wvfUEW8aUyId2Yyh8ISPrPdFTidttgpNR755NKJi2Z2wxKm00lKBAzv1jyDOhf-/p?fv_content=true&size_mode=5",
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