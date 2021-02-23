import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import classes from './Navbar.module.css';
import door from "../src/images/door.jpg"
import keyHole from "../src/images/keyhole.png"



export function Navbar() {

    let state = {
        img1: door ,
        img2: keyHole,
    }

    let [img, setImg] = useState(state.img1);


    const onTarget = () => {
        setImg(state.img2)
    }
    const onLeave = () => {
        setImg(state.img1)
    }




    let state22 = {
        img122: door,
        img222: keyHole,
    }

    let [img22, setImg22] = useState(state22.img122);


    const onTarget22 = () => {
        setImg22(state22.img222)
    }
    const onLeave22 = () => {
        setImg22(state22.img122)
    }




    let state33 = {
        img133: door,
        img233: keyHole,
    }

    let [img33, setImg33] = useState(state33.img133);


    const onTarget33 = () => {
        setImg33(state33.img233)
    }
    const onLeave33 = () => {
        setImg33(state33.img133)
    }




    let state44 = {
        img144: door,
        img244: keyHole,
    }

    let [img44, setImg44] = useState(state44.img144);


    const onTarget44= () => {
        setImg44(state44.img244)
    }
    const onLeave44 = () => {
        setImg44(state44.img144)
    }


    let state55 = {
        img155: door,
        img255: keyHole
    }

    let [img55, setImg55] = useState(state55.img155);


    const onTarget55= () => {
        setImg55(state55.img255)
    }
    const onLeave55 = () => {
        setImg55(state55.img155)
    }


    let state66 = {
        img166: door,
        img266: keyHole,
    }

    let [img66, setImg66] = useState(state66.img166);


    const onTarget66= () => {
        setImg66(state66.img266)
    }
    const onLeave66 = () => {
        setImg66(state66.img166)
    }


    let state77 = {
        img177: door,
        img277: keyHole,
    }

    let [img77, setImg77] = useState(state77.img177);


    const onTarget77= () => {
        setImg77(state77.img277)
    }
    const onLeave77 = () => {
        setImg77(state77.img177)
    }



    let state88 = {
        img188: door,
        img288: keyHole,
    }

    let [img88, setImg88] = useState(state88.img188);


    const onTarget88= () => {
        setImg88(state88.img288)
    }
    const onLeave88 = () => {
        setImg88(state88.img188)
    }



    let state99 = {
        img199: door,
        img299: keyHole,
    }

    let [img99, setImg99] = useState(state99.img199);


    const onTarget99= () => {
        setImg99(state99.img299)
    }
    const onLeave99 = () => {
        setImg99(state99.img199)
    }


    let state100 = {
        img1100: door,
        img2100: keyHole,
    }

    let [img100, setImg100] = useState(state100.img1100);


    const onTarget100= () => {
        setImg100(state100.img2100)
    }
    const onLeave100 = () => {
        setImg100(state100.img1100)
    }





    return (
        <div className={classes.wraper}>


            <div className={classes.box}>
                <NavLink  to="/door1"  onMouseEnter={onTarget}  onMouseLeave={onLeave} ><img  className={classes.img}   src={img} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door2"  onMouseEnter={onTarget22}  onMouseLeave={onLeave22} ><img  className={classes.img}   src={img22} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door3"  onMouseEnter={onTarget33}  onMouseLeave={onLeave33} ><img  className={classes.img}   src={img33} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door4"  onMouseEnter={onTarget44}  onMouseLeave={onLeave44} ><img  className={classes.img}   src={img44} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door5"  onMouseEnter={onTarget55}  onMouseLeave={onLeave55} ><img  className={classes.img}   src={img55} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door6"  onMouseEnter={onTarget66}  onMouseLeave={onLeave66} ><img  className={classes.img}   src={img66} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door7"  onMouseEnter={onTarget77}  onMouseLeave={onLeave77} ><img  className={classes.img}   src={img77} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door8"  onMouseEnter={onTarget88}  onMouseLeave={onLeave88} ><img  className={classes.img}   src={img88} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door9"  onMouseEnter={onTarget99}  onMouseLeave={onLeave99} ><img  className={classes.img}   src={img99} alt="door"/></NavLink>
            </div>

            <div className={classes.box}>
                <NavLink  to="/door10"  onMouseEnter={onTarget100}  onMouseLeave={onLeave100} ><img  className={classes.img}   src={img100} alt="door"/></NavLink>
            </div>

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door1"  onMouseEnter={onTarget} ><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door2"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door3"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door4"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door5"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door6"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door7"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door8"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door9"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

            {/*<div className={classes.box}>*/}
            {/*    <NavLink  to="/door10"><img  className={classes.img}   src="https://uc9bf5fcbe436e93dbdef9d8bf89.previews.dropboxusercontent.com/p/thumb/AA3hkmW4ROFro6k7RNjFVRrdmRnBCaMWiemi1hH07zW2r2Qy_aVa73Hwd0BcN0g81_SnyyBolpedVAmgbWkA_pGD1AfNOUvNM8Wvhais7y75emwnTkno9M_1onNXYb7wyajO2MOrpTVJ5QyhDRj7vmmo313aQu7e_AVE9b8-oqS1OChM8LI3-W1L53MYzv3gbWjG-eHz-1gLnSLChXk4AwBSBziqblbsHxkKKZ8Ao1tJ2hxkvMzWOuPdL_bFc6ZqwlCG-opszSChbXjay9JJWdYpr4ZkQTRWQM6xacK8Hy8gAMYpYD1fvaUsxyRQsctxdnG4wXdoWMDY658d4kWBPiRoDOs2yEm5X3Z7pNkn5v3I7g/p.png?fv_content=true&size_mode=5" alt="door"/></NavLink>*/}
            {/*</div>*/}

        </div>
    )
}