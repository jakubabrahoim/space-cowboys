import React from 'react';

import Home from './components/Home/Home';
import Facts from './components/Facts/Facts';
import Team from './components/Team/Team';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDr-1LmmokkdRTpAA2ZolPSZAa39Gf9y70",
    authDomain: "space-cowboys-jakub.firebaseapp.com",
    projectId: "space-cowboys-jakub",
    storageBucket: "space-cowboys-jakub.appspot.com",
    messagingSenderId: "446274066360",
    appId: "1:446274066360:web:32575e1697cef4f0ae214d",
    measurementId: "G-XBGHWNQ16T"
  };


const app = initializeApp(firebaseConfig);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const analytics = getAnalytics(app);

function App() {

    return (
        <div>
            <Home></Home>
            <Facts></Facts>
            <Team></Team>
            <Gallery></Gallery>
            <Contact></Contact>
        </div>
    )
}

export default App;
