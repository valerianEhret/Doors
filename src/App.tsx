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

    // let state = {
    //     img1: "https://uc8eda54aa0c8e41f7487d8b6a32.previews.dropboxusercontent.com/p/thumb/AA3pwpk8vrOtcnHg3lxD7hmUC8hGnGCF_rHGYlkISC59xqdtFSPfbsw7e5Yy2Pc0J_X_DtEkEQu-rYTzc7UZeU_RfJ5yVrJ5zQVGJMBz5oNCjxq_A62tlC5XII_35FkLGcDIfJinsZPzmhYjN6agzieSKRium_6Jzf_X_rcSYAiFQWxcgccbZWm6BR58DMGty0Uq9PjIU48r1UI5TH31JD3RlEBNfJ_uF8LZN5oB2y0904xIx-bNTRKQVf2lG4GqAB8nBBLQi8hTXJxnRXIpjHtCWOS0mZ-kJdT6PmK0c-0C1qQXaP94nwXXAtZAwcq-B38ZNjFSQNhk6ZJheGtHTyfy/p?fv_content=true&size_mode=5",
    //     img2: "https://uc868671efd8487135cf6112c405.previews.dropboxusercontent.com/p/thumb/AA0GrBJwBAAB2ErLEDcywg6csxnJFJB7pdtckMAhkEbaR0botQdjiKL6nTvCZz2CYsDzur8oMeE-t5z0sQFSLN3K56CQG2vtQu7G5CNHhSOh0Olgl6otbSHmyuF_fscPmcGDplqLDKJSqQWNzE4IE49JTnlOFrsT0OeYJN56jE-uNbNBjClmOI5Fqtoe5ThS7-ZXLiCDMs_JJ-DhHMDFNrCgfqieeVVa7_bIb80ARaZ4uvdX8f1jADfdDVxGqOtLI8LOfOdsNGCrrZtzAERnv2BtWNOw5LpXS7DKxupmDgqsPh5UIZsOWGP6K0LqfQ0LIWLW3DmswnL3k-jI_dMfPOzp/p?fv_content=true&size_mode=5",
    // }


        return (
        <HashRouter>
            <div className="App">
                <Navbar/>
                <Route path="/door1" render={ () => <Door1
                    // img1={img1}
                    // img2={img2}


                />} />




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
