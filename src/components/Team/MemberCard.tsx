type Card = {
    heading: any,
    text: any,
    picture: any,
    css: string
}

function MemberCard({ heading, text, picture, css }: Card) {
    return (
        <div className={css}>
            <div className='cardContentWrapper'>
                <img src={picture} alt='profilePicture' className='w-[200px] rounded-lg' />
                <div className='pl-6 pr-16'>
                    <h3 className='text-white text-lg font-bold mb-2'>{heading}</h3>
                    <p className='cardText'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MemberCard;