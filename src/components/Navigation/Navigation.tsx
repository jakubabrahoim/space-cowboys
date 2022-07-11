
import { IconContext } from "react-icons";
import { IoIosRocket } from "react-icons/io";

function Navigation() {
    
    function scrollToSection(sectionIndex: number): void {
        let windowHeight: number = window.innerHeight;
        window.scrollTo({left: 0, top: sectionIndex * windowHeight, behavior: 'smooth'});
    }
    
    return (
        <div className='flex flex-row items-center h-12 sticky top-0 z-10'>
            <div className='basis-1/6 flex justify-start'>
                <IconContext.Provider value={{ className: 'text-white h-8 w-8 ml-36' }}>
                    <IoIosRocket />
                </IconContext.Provider> &nbsp;
            </div>
            <div className='basis-5/6 flex justify-end mr-36'>
                <button className='mx-6 text-white font-bold' onClick={() => scrollToSection(1)}>ABOUT US</button>
                <button className='mx-6 text-white font-bold' onClick={() => scrollToSection(2)}>THE TEAM</button>
                <button className='mx-6 text-white font-bold' onClick={() => scrollToSection(3)}>IMPRESSIONS</button>
                <button className='mx-6 text-white font-bold' onClick={() => scrollToSection(4)}>CONTACT</button>
            </div>
        </div>
    )
}

export default Navigation;