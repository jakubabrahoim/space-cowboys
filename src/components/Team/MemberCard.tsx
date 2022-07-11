import { useState } from "react";

type Card = {
    heading: any,
    text: any,
    picture: any,
    quote: string,
    memberName: string,
    css: string
}

function MemberCard({ heading, text, picture, quote, memberName, css }: Card) {

    let [cardSide, setCardSide] = useState<string>('front');

    function flipCard(): void {
        setCardSide(cardSide === 'front' ? 'back' : 'front');
    }

    return (
        <div className={css} onClick={() => flipCard()}>
            {
                cardSide === 'front' &&
                <div className='cardContentWrapper'>
                    <img src={picture} alt='profilePicture' className='w-[200px] h-[206px] rounded-lg' />
                    <div className='pl-6 pr-16'>
                        <h3 className='text-white text-lg font-bold mb-2'>{heading}</h3>
                        <p className='text-white text-sm'>
                            {text}
                        </p>
                    </div>
                </div>
            }
            {
                cardSide === 'back' &&
                <div className='flex flex-col rounded-lg h-full w-max px-24 lg:px-0 items-center justify-center bg-gray-800'>
                    <p className="text-gray-400 text-xs">{memberName}'S FAMOUSE QUOTE:</p>
                    <p className='text-white text-2xl italic mt-12'>
                        "{quote}"
                    </p>
                </div>
            }
        </div>
    )
}

export default MemberCard;