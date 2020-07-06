import React, {useState} from 'react';
import classes from '../Door.module.css';


export function Door7() {

    let state1 = {
        img1: "https://uc5014c7da7c808e159a4bdc8f1d.previews.dropboxusercontent.com/p/thumb/AA2_ZKBpOca8UDuHiFw-5zQaFDYIHtWor2cWmmiAvMgKmAhx-V4fJagLs8OWJlNJvlKQ5_GYPQ9Lbuz7gsh80tatZDKY4QLxkA7Wxl8RtprCSJAvLpWuQAdFgCeVlixmKg_Bpol8W1fQN94vQvE1a3EZIJ0nyq8BusIsnn7t0baOJb8-7aeg-nbL4r7p_G19wjXd-h9ZGOSe1-_Q14dSV6g9XU56fKbk-1Obdw-sy1xRd7irfikfM2SzGsvB6F6ureLVzJZYYxWJxWhSE0tn0ZP5CGcsA352w9GZaU3d8qsn763oDwuL9sgAtIYypyn153oE_ye7etb1jx5CqfncytbG/p?fv_content=true&size_mode=5",
        img2: "https://ucbcd4a1968faacf263395bfaf0c.previews.dropboxusercontent.com/p/thumb/AA1UER318LgbWVaYnefm6Rc-RxcOPEiugPE54zXqALJ2ZiF5DRSJYdq3KZsPcwIcgPkpl2Gp8CC3HLwcC7Lx03w1A7Bt-38GzmyA3dQLCZ9hwX07E6d86ZPjuLQVfPQwiqUAp6uIvzKwnkZ7lqM6QQmUbKDUs2rmBSR7T43I2qBU-qsQpNlEoUTWdqOSUD7dWAnrv9kctpmaE0HVLchOjatISc7VEbbvDLDogxRq6hYTzZnV_RiPsv6d-1XeM5HMHrKQ0O6SFgiJB_HHmQm95R7CTvsohPlkHOsSWeNyhpxtSFobxvCyqgpo__5rwNRY4UVAGVeD6sfCvR43lMc02VG6/p?fv_content=true&size_mode=5",
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
                <img src={img} alt="image" onClick={nextImg}/>
            </div>
        </div>
    )

}