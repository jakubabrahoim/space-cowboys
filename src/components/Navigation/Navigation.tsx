
import { useState } from "react";

import { IconContext } from "react-icons";
import { IoIosRocket } from "react-icons/io";

function Navigation() {

    let [mobileNavVisibility, setMobileNavVisibility] = useState<string>('hidden');

    function toggleNav(): void {
        setMobileNavVisibility(mobileNavVisibility === 'hidden' ? 'visible' : 'hidden');
    }
    
    return (
        <div className={`flex flex-col sm:flex-row items-center ${mobileNavVisibility === 'visible' ? 'h-42' : 'h-12' } sm:h-12 z-10`}>
            <button className='self-end visible sm:invisible border border-white rounded-md px-2 text-white mt-3 mr-4' onClick={() => toggleNav()}>
                Menu
            </button>
            <div className={
                `basis-1/6 flex justify-start 
                ${mobileNavVisibility === 'visible' ? 'visible': 'invisible'} sm:visible`
            }>
                <IconContext.Provider value={{ className: 'text-white h-8 w-8 mb-2 mt-2 sm:mb-0 md:ml-12 lg:ml-36' }}>
                    <IoIosRocket />
                </IconContext.Provider> &nbsp;
            </div>
            <div className={
                `basis-5/6 flex flex-col sm:flex-row items-center justify-end 
                ${mobileNavVisibility === 'visible' ? 'visible': 'invisible'} sm:visible md:mr-12 lg:mr-36`
            }>
                <a href='#facts' className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold'>ABOUT US</a>
                <a href='#team' className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold'>TEAM</a>
                <a href='#impressions' className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold'>IMPRESSIONS</a>
                <a href='#contact' className='mb-2 sm:mb-0 sm:mx-3 md:mx-6 text-white font-bold'>CONTACT</a>
            </div>
        </div>
    )
}

export default Navigation;