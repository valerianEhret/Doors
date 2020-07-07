import React from 'react';
import './App.css';
import {Door1} from "./Doors/Door1";
import {HashRouter, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import {Door2} from "./Doors/Door2";
import {Door3} from "./Doors/Door3";
import {Door4} from "./Doors/Door4";
import {Door5} from "./Doors/Door5";
import {Door6} from "./Doors/Door6";
import {Door7} from "./Doors/Door7";
import {Door8} from "./Doors/Door8";
import {Door9} from "./Doors/Door9";
import {Door10} from "./Doors/Door10";


type Statetype = {
    img1:string
    img2:string
}








function App() {


        return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Route path="/door1" render={ () => <Door1/>} />
                <Route path="/door2" render={ () => <Door2/>} />
                <Route path="/door3" render={ () => <Door3/>} />
                <Route path="/door4" render={ () => <Door4/>} />
                <Route path="/door5" render={ () => <Door5/>} />
                <Route path="/door6" render={ () => <Door6/>} />
                <Route path="/door7" render={ () => <Door7/>} />
                <Route path="/door8" render={ () => <Door8/>} />
                <Route path="/door9" render={ () => <Door9/>} />
                <Route path="/door10" render={ () => <Door10/>} />


            </div>
        </HashRouter>
    );
}

export default App;
