import MemberCard from './MemberCard';

let profilePicture = require('../../assets/profilePicture.png');

function Team() {
    return (
        <section className='teamBg'>
            <div className='teamWrapper'>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl font-bold text-white mt-12'>THE TEAM</h2>
                    <p className='text-gray-100 text-center mt-4'>
                        Yep, that's us. Six fine fellows, eager to get on the next adventure. <br />
                        Click on the pictures to get some more information!
                    </p>
                </div>
                <div className='flex flex-row overflow-x-auto lg:grid lg:grid-cols-12 lg:mx-56 justify-items-center mt-24 lg:mt-12'>
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
                        css='lg:col-span-6 lg:justify-self-end mr-16 ml-4 lg:mx-6 rounded-lg h-[206px] w-[400px] hover:cursor-pointer'
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
                        css='lg:col-span-6 lg:justify-self-start mr-16 ml-4 lg:mx-6 rounded-lg h-[206px] w-[400px] hover:cursor-pointer'
                    />
                </div>
            </div>
        </section>
    )
}

export default Team;