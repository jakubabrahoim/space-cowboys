import Navigation from '../Navigation/Navigation';

function Home() {
    
    function landingScroll(): void {
        let windowHeight: number = window.innerHeight;
        window.scrollTo({left: 0, top: windowHeight, behavior: 'smooth'});
    }
    
    return (
        <section className='landingBg'>
            <Navigation></Navigation>
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
    )
}

export default Home;