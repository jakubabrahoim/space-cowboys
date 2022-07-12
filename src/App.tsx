import React from 'react';

import Home from './components/Home/Home';
import Facts from './components/Facts/Facts';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

function App() {

    return (
        <div>
            <Home></Home>
            <Facts></Facts>
            <Team></Team>

            {/* GALLERY PAGE */}
            <section id='impressions' className='bg-pink-300 h-screen'>

            </section>
            <Contact></Contact>
        </div>
    )
}

export default App;
