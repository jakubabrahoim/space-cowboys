import React from 'react';

import Home from './components/Home/Home';
import Facts from './components/Facts/Facts';
import Team from './components/Team/Team';

import { IconContext } from 'react-icons';
import { IoIosRocket } from 'react-icons/io';

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
            <section className='bg-gray-300 h-screen'>
                <div className='flex flex-col items-center h-9/10'>
                    <h2 className='text-3xl font-bold text-black mt-12'>SAY HELLO</h2>
                    <p className='text-gray-700 text-center mt-4'>
                        Got some questions about us? Wanna do business with us? <br/>
                        Or do you just want to send us your latest cat-content - there you go:
                    </p>

                    <form className='grid grid-cols-2 items-center justify-items-center mt-12'>
                        <div className='flex flex-col mx-4'>
                            <span id='firstNameLabel' hidden>First Name</span>
                            <input 
                                type='text' 
                                name='firstName' 
                                placeholder='First Name'
                                aria-labelledby='firstNameLabel'
                                className='mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100'
                            />
                            <span id='lastNameLabel' hidden>Last Name</span>
                            <input 
                                type='text' 
                                name='lastName' 
                                placeholder='Last Name'
                                aria-labelledby='lastNameLabel'
                                className='mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100'
                            />
                            <span id='emailLabel' hidden>E-Mail</span>
                            <input 
                                type='email' 
                                name='email' 
                                placeholder='E-Mail'
                                aria-labelledby='emailLabel'
                                className='mb-4 rounded-md h-10 w-64 pl-2 outline outline-1 outline-gray-100 border border-gray-100'
                            />
                        </div>
                        
                        <textarea 
                            name='message' 
                            placeholder='Your Message'
                            className='mb-4 rounded-md h-[152px] w-64 pl-2 pt-2 outline outline-1 outline-gray-100 border border-gray-100'
                        />
                        
                        <div className='col-span-2 mt-12'>
                            <input 
                                type='submit' 
                                value='SEND THAT MAIL' 
                                className='font-bold text-black text-lg bg-yellow-300 rounded-md px-16 py-4'
                            />
                        </div>
                        
                    </form>
                </div>

                <div className='h-1/10 w-full bg-gray-800 flex flex-col items-center justify-center'>
                    <p className='text-gray-500 mb-2'>Copyright © 2015</p>
                    <div className='text-gray-500 font-bold flex flex-row items-center'>
                        SPACE &nbsp;
                        <IconContext.Provider value={{ className: 'text-gray-500 h-8 w-8' }}>
                            <IoIosRocket />
                        </IconContext.Provider> &nbsp;
                        COWBOYS
                    </div>
                </div>
            </section>
        </div>
    )
}

export default App;
