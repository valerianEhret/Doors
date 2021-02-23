import React from 'react';
import './App.css';
import {Door} from "./Door";
import {HashRouter, Route} from "react-router-dom";
import {Navbar} from "./Navbar";
import photo1 from '../src/images/door1/1.jpg'
import photo2 from '../src/images/door1/2.jpg'
import photo3 from '../src/images/door2/1.jpg'
import photo4 from '../src/images/door2/2.jpg'
import photo5 from '../src/images/door3/1.jpg'
import photo6 from '../src/images/door3/2.jpg'
import photo7 from '../src/images/door4/1.jpg'
import photo8 from '../src/images/door4/2.jpg'
import photo9 from '../src/images/door5/1.jpg'
import photo10 from '../src/images/door5/2.jpg'
import photo11 from '../src/images/door6/1.jpg'
import photo12 from '../src/images/door6/2.jpg'
import photo13 from '../src/images/door7/1.jpg'
import photo14 from '../src/images/door7/2.jpg'
import photo15 from '../src/images/door8/1.jpg'
import photo16 from '../src/images/door8/2.jpg'
import photo17 from '../src/images/door9/1.jpg'
import photo18 from '../src/images/door9/2.jpg'
import photo19 from '../src/images/door10/1.jpg'
import photo20 from '../src/images/door10/2.jpg'

function App() {


        return (
        <HashRouter>
            <div className="App">
                <Route path="/door1" render={ () => <Door img1={photo1} img2={photo2} />} />
                <Route path="/door2" render={ () => <Door  img1={photo3}  img2={photo4} />} />
                <Route path="/door3" render={ () => <Door  img1={photo5}  img2={photo6} />} />
                <Route path="/door4" render={ () => <Door  img1={photo7}  img2={photo8} />} />
                <Route path="/door5" render={ () => <Door  img1={photo9}  img2={photo10} />} />
                <Route path="/door6" render={ () => <Door  img1={photo11}  img2={photo12} />} />
                <Route path="/door7" render={ () => <Door  img1={photo13}  img2={photo14} />} />
                <Route path="/door8" render={ () => <Door  img1={photo15}  img2={photo16} />} />
                <Route path="/door9" render={ () => <Door  img1={photo17}  img2={photo18} />} />
                <Route path="/door10" render={ () => <Door  img1={photo19}  img2={photo20} />} />
                <Navbar/>

            </div>
        </HashRouter>
    );
}

export default App;
