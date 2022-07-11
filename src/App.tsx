import React from 'react';

import Home from './components/Home/Home';
import Facts from './components/Facts/Facts';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact';

function App() {

    return (
        <div>
            {/*
            <div className='flex flex-row items-center h-12 sticky top-0 z-10'>
                    <div className='basis-1/6 flex justify-start'>
                        <h1 className='ml-36'>Logo</h1>
                    </div>
                    <div className='basis-5/6 flex justify-end mr-36'>
                        <button className='mx-6'>ABOUT US</button>
                        <button className='mx-6'>THE TEAM</button>
                        <button className='mx-6'>IMPRESSIONS</button>
                        <button className='mx-6'>CONTACT</button>    
                    </div>
            </div>
            */}

            {/* LANDING PAGE */}
            <Home></Home>

            {/* FACTS PAGE */}
            <Facts></Facts>
            

            {/* TEAM PAGE */}
            <Team></Team>

            {/* GALLERY PAGE */}
            <section className='bg-pink-300 h-screen'>

            </section>

            {/* CONTACT PAGE */}
            <Contact></Contact>
        </div>
    )
}

export default App;
