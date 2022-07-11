
import { IconContext } from "react-icons";
import { IoIosRocket } from "react-icons/io";

function Navigation() {
    
    function scrollToSection(sectionIndex: number): void {
        let windowHeight: number = window.innerHeight;
        window.scrollTo({left: 0, top: sectionIndex * windowHeight, behavior: 'smooth'});
    }
    
    return (
        <div className='flex flex-col sm:flex-row items-center h-42 sm:h-12 z-10'>
            <div className='basis-1/6 flex justify-start'>
                <IconContext.Provider value={{ className: 'text-white h-8 w-8 mb-2 mt-2 sm:mb-0 md:ml-12 lg:ml-36' }}>
                    <IoIosRocket />
                </IconContext.Provider> &nbsp;
            </div>
            <div className='basis-5/6 flex flex-col sm:flex-row items-center justify-end md:mr-12 lg:mr-36'>
                <button className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold' onClick={() => scrollToSection(1)}>ABOUT US</button>
                <button className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold' onClick={() => scrollToSection(2)}>THE TEAM</button>
                <button className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold' onClick={() => scrollToSection(3)}>IMPRESSIONS</button>
                <button className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold' onClick={() => scrollToSection(4)}>CONTACT</button>
            </div>
        </div>
    )
}

export default Navigation;