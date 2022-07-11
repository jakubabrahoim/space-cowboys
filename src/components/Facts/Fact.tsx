import { IconContext } from "react-icons";
import { FaHatCowboy } from "react-icons/fa";
import { GoTools } from "react-icons/go";
import { IoMdPlanet } from "react-icons/io";

type factInfo = {
    heading: string,
    text: any,
    icon: string
}

function Fact({ heading, text, icon }: factInfo) {
    return (
        <div className='factsCard'>
            <h2 className='factsHeading'>{heading}</h2>
            <p className='factsText'>
                {text}
            </p>
            <div className='factsIconWrapper'>
                <IconContext.Provider value={{ className: 'text-gray-700 w-8 h-8' }}>
                    { icon === 'cowboyHat' && <FaHatCowboy /> }
                    { icon === 'tools' && <GoTools /> }
                    { icon === 'planet' && <IoMdPlanet /> }
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default Fact;