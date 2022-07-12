import Fact from './Fact';

function Facts() {
    return (
        <section id='facts' className='bg-stone-100 h-[1150px] sm:h-screen'>
            <div className='flex flex-col items-center'>
                <h2 className='text-3xl font-bold text-black text-center px-4 sm:px-0 mt-12'>A FEW FACTS ABOUT US</h2>
                <p className='text-gray-700 text-center px-4 sm:px-0 mt-4'>
                    Before you do business with us, <br />
                    you might want to know a little bit more about our company:
                </p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center h-[700px] lg:h-[500px] mt-32 lg:mt-0'>
                <Fact
                    heading='WE ARE COWBOYS'
                    text={
                        <>
                            You might have guessed that from our <br /> 
                            company name, but the fact is: <br /> 
                            Yes, we are indeed cowboys. Cowboys <br />
                            who'd like to go to space. <br />Deal with it.
                        </>
                    }
                    icon='cowboyHat'
                />
                <Fact
                    heading='WE LIKE TO TINKER'
                    text={
                        <>
                            There are a lot of things lying around on <br />
                            a typical Cowboy Ranch. So we started <br />
                            putting them together, and got really <br />
                            good at rocket building.
                        </>
                    }
                    icon='tools'
                />
                <Fact
                    heading='WE EXPLORE SPACE'
                    text={
                        <>
                            Once we got out first proper rocket, <br />
                            everything went quite fast. And now we <br />
                            are the #1 independent space agency in <br />
                            the world. <br />
                            Who would have guessed?
                        </>
                    }
                    icon='planet'
                />
            </div>
        </section>
    )
}

export default Facts;