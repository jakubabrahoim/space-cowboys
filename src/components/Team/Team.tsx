import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { IconContext } from 'react-icons';

import MemberCard from './MemberCard';

let profilePicture = require('../../assets/profilePicture.png');

function Team() {
    
    function verticalScroll(direction: string): void {
        let memberContainer: HTMLElement = document.getElementById('memberCards') as HTMLElement;

        if(direction === 'left') memberContainer.scrollBy({left: -450, top: 0, behavior: 'smooth'});
        else memberContainer.scrollBy({left: 450, top: 0, behavior: 'smooth'});
    }
    
    return (
        <section id='team' className='teamBg'>
            <div className='teamWrapper'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-white mt-12'>THE TEAM</h2>
                    <p className='text-gray-100 text-center mt-4'>
                        Yep, that's us. Six fine fellows, eager to get on the next adventure. <br />
                        Click on the pictures to get some more information!
                    </p>
                </div>
                <div id='memberCards' className='flex flex-row overflow-x-auto snap-x sm:snap-none lg:grid lg:grid-cols-12 lg:mx-56 justify-items-center mt-24 lg:mt-12'>
                    <MemberCard
                        heading={<>RICHIE <br /> FARHEM</>}
                        text={
                            <>
                                ENGINEER <br /><br />
                                AGE: 48 <br />
                                MISSIONS: 13
                            </>
                        }
                        picture={profilePicture}
                        quote='I like hotdogs.'
                        memberName='RICHIE'
                        css='profileCardRow1'
                    />
                    <MemberCard
                        heading={<>RICHIE <br /> FARHEM</>}
                        text={
                            <>
                                ENGINEER <br /><br />
                                AGE: 48 <br />
                                MISSIONS: 13
                            </>
                        }
                        picture={profilePicture}
                        quote='I like hotdogs.'
                        memberName='RICHIE'
                        css='profileCardRow1'
                    />
                    <MemberCard
                        heading={<>JOHN <br /> SIRACHA</>}
                        text={
                            <>
                                GUNSLINGER <br /><br />
                                AGE: 47 <br />
                                MISSIONS: 13
                            </>
                        }
                        picture={profilePicture}
                        quote='I like pizza.'
                        memberName='JOHN'
                        css='profileCardRow1'
                    />
                    <MemberCard
                        heading={<>BERT <br /> McNAMERA</>}
                        text={
                            <>
                                CAPTAIN <br /><br />
                                AGE: 71 <br />
                                MISSIONS: 13
                        </>
                        }
                        picture={profilePicture}
                        quote='I like apples.'
                        memberName='BERT'
                        css='lg:col-span-6 lg:justify-self-end mr-16 ml-4 snap-center sm:snap-none lg:mx-6 rounded-lg h-[206px] w-[400px] hover:cursor-pointer'
                    />
                    <MemberCard
                        heading={<>AL <br /> SVERINGE</>}
                        text={
                            <>
                                CEO <br /><br />
                                AGE: 76 <br />
                                MISSIONS: 13
                        </>
                        }
                        picture={profilePicture}
                        quote='I like bananas.'
                        memberName='AL'
                        css='lg:col-span-6 lg:justify-self-start mr-16 ml-4 snap-center sm:snap-none lg:mx-6 rounded-lg h-[206px] w-[400px] hover:cursor-pointer'
                    />
                </div>
                <div className='flex flex-row w-screen mt-4 sm:hidden'>
                    <div className='flex basis-1/2 items-center justify-start h-12'>
                        <button 
                            className='border border-white text-white rounded-full w-12 h-12 ml-6'
                            onClick={() => verticalScroll('left')}
                        >
                            <IconContext.Provider value={{ className: 'inline text-white font-bold w-8 h-8' }}>
                                <AiOutlineLeft />
                            </IconContext.Provider>
                        </button>
                    </div>
                    <div className='flex basis-1/2 items-center justify-end h-12'>
                        <button 
                            className='border border-white text-white rounded-full w-12 h-12 mr-6'
                            onClick={() => verticalScroll('right')}
                        >
                            <IconContext.Provider value={{ className: 'inline text-white font-bold w-8 h-8' }}>
                                <AiOutlineRight />
                            </IconContext.Provider>
                        </button>   
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team;