import React from 'react';

import { IconContext } from 'react-icons';
import { FaHatCowboy } from 'react-icons/fa';
import { GoTools } from 'react-icons/go';
import { IoMdPlanet } from 'react-icons/io';

function App() {

    function landingScroll(): void {
        let windowHeight: number = window.innerHeight;
        //window.scrollBy({left: 0, top: windowHeight, behavior: 'smooth'});
        window.scrollTo({left: 0, top: windowHeight, behavior: 'smooth'});
    }

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
            <section className='landingBg'>
                <div className='landingWrapper'>
                    <h1 className='text-center text-5xl font-bold text text-white mb-4'>
                        HEY THERE, WE ARE <br/> SPACECOWBOY
                    </h1>
                    <h2 className='text-3xl font-bold text-white mb-36'>
                        - AN INDEPENDENT AGENCY - 
                    </h2>
                    <button 
                        className='font-bold text-black text-lg bg-yellow-300 rounded-md px-16 py-4'
                        onClick={landingScroll}
                    >
                        LEARN MORE
                    </button>
                </div>
            </section>

            {/* FACTS PAGE */}
            <section className='bg-stone-100 h-screen'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-black mt-12'>A FEW FACTS ABOUT US</h2>
                    <p className='text-gray-700 text-center mt-4'>
                        Before you do business with us, <br/>
                        you might want to know a little bit more about our company:
                    </p>
                </div>

                <div className='flex flex-row justify-center items-center h-[500px] mt-12'>
                    <div className='factsCard'>
                        <h2 className='factsHeading'>WE ARE COWBOYS</h2>
                        <p className='factsText'>
                            You might have guessed that from our <br/>
                            company name, but the fact is: <br/>
                            Yes, we are indeed cowboys. Cowboys <br/>
                            who'd like to go to space. <br/>
                            Deal with it.
                        </p>
                        <div className='factsIconWrapper'>
                            <IconContext.Provider value={{className: 'text-gray-700 w-8 h-8'}}>
                                <FaHatCowboy></FaHatCowboy>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='factsCard'>
                        <h2 className='factsHeading'>WE LIKE TO TINKER</h2>
                        <p className='factsText'>
                            There are a lot of things lying around on <br/>
                            a typical Cowboy Ranch. So we started <br/>
                            putting them together, and got really <br/>
                            good at rocket building.
                        </p>
                        <div className='factsIconWrapper'>
                            <IconContext.Provider value={{className: 'text-gray-700 w-8 h-8'}}>
                                <GoTools></GoTools>
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div className='factsCard'>
                        <h2 className='factsHeading'>WE EXPLORE SPACE</h2>
                        <p className='factsText'>
                            Once we got out first proper rocket, <br/>
                            everything went quite fast. And now we <br/>
                            are the #1 independent space agency in <br/>
                            the world. <br/>
                            Who would have guessed?
                        </p>
                        <div className='factsIconWrapper'>
                            <IconContext.Provider value={{className: 'text-gray-700 w-8 h-8'}}>
                                <IoMdPlanet></IoMdPlanet>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>

            </section>

            {/* TEAM PAGE */}
            <section className='teamBg'>
                <div className='teamWrapper'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-3xl font-bold text-white mt-12'>THE TEAM</h2>
                        <p className='text-gray-100 text-center mt-4'>
                            Yep, that's us. Six fine fellows, eager to get on the next adventure. <br/>
                            Click on the pictures to get some more information!
                        </p>
                    </div>
                    <div className='grid grid-cols-12 mx-56 justify-items-center mt-12'>
                        <div className='col-span-4 border'>
                            Col
                        </div>
                        <div className='col-span-4 border'>
                            Col
                        </div>
                        <div className='col-span-4 border'>
                            Col
                        </div>
                        <div className='col-span-6 border'>
                            Col
                        </div>
                        <div className='col-span-6 border'>
                            Col
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-pink-300 h-screen'>

            </section>

            <section className='bg-orange-300 h-screen'>

            </section>

        </div>
    );
}

export default App;
