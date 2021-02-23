import React, {ChangeEvent, useState} from 'react';
import classes from './Door.module.css';

type PropsType = {
    img1:string
    img2:string
}


type RadioType = {
    id:string
    checked:boolean
}

export function Door(props:PropsType) {

    let [radioValue, serRadioValue] = useState<Array<RadioType>>(
        [
            {id:'1', checked:true},
            {id:'2', checked: false}
        ]
    )


    const changeRadio = (event:any) => {
        let newArr = radioValue.map( (el) => {
            if (el.id === event.currentTarget.id) {
                setImg(props.img2)
                return {...el, checked:event.currentTarget.checked}
            } else {
                setImg(props.img1)
                return {...el, checked: !event.currentTarget.checked}
            }
        })
        serRadioValue(newArr);
    }



    let [img, setImg] = useState(props.img1);


    const nextImg = () => {
        if( img === props.img1) {
            setImg(props.img2)
            serRadioValue([{id:'1', checked:false },{id:'2', checked:true}])
        } else {
            setImg(props.img1)
            serRadioValue([{id:'1', checked:true },{id:'2', checked:false}])
        }
    }



    return (

        <div className={classes.wraper}>
            <div className={classes.box}>

                    <img  className={classes.img}   src={img} alt="image" onClick={nextImg}/>
            </div>

            <div  className={classes.radio} >
                {radioValue.map( (el) => {
                    return  <label>
                        <input type="radio" checked={el.checked} id={el.id} onClick={changeRadio} />
                    </label>
                })}
            </div>

        </div>
    )

}