import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door3() {

    let state1 = {
        img1: "https://uc0689948bb12d2ad0f4b51f69d7.previews.dropboxusercontent.com/p/thumb/AA0hT1RYHFsCD7JBFi-BVESCIpZwXQKmwFWaLBugfy90TGqYS0MvGk5f3eb4R34AQlZ8ca5Th19dLUURRlWFULND84_3ISJygFol72qPLpcz0iBsMSLSNA3VnBZtoajB9B--zUPJU8BFZ5cHwus2k5PXzw56ymZp7C3FnvOLeRMBzxMmExzVa27F9U2si4_3ImaLK8oqVEAOiu1RDeZ-fF9oYU8PaDYyjYRzPhf1EbzeUkH2kQwkmTP5BAXP5hx8u1xZvlfcDVtxPWBVHS2xwlmUxzEP_UNEU4TxDS378gjrkMxI_MHYjneFoix5aTdaldvviqqboxYXqU8Cgj_xqo9d/p?fv_content=true&size_mode=5",
        img2: "https://uc78e3174ae365011029e295fde1.previews.dropboxusercontent.com/p/thumb/AA0jmLMY-W2lhVmR_j3eB8ttn2gx_CfocrFy3kdkcIImBadF5jhYyg-Mk_fz6inztCqcxLJG5aJ1nywgxmGtZEbiv8EtiEPN3SgO4BuOr1yWaiRvOHh7HF_i-wjc7Nq-oeKUpKA_KgtfIN8LVwuk2M4XCmalQ7mIPP5YeAqLtJU0x0ldpJ8-sL8vozneW37F4PUnJc5xnqbJLufFijbhq29EUexHgxUqINCWLI45vIkHyah29NyXYaMDcSEKVHFvBtmOCCAsEpPTzMHHb5CKbJqE5H0wBtd-XqpHmY4cfigqEOzhPPKdz0OQiWtwgmciUafUM3l8GX2vGn9RLo4q-a3J/p?fv_content=true&size_mode=5",
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