import './AboutMe.css';

export const AboutMe = () => {
    return (
        <>
            <div className="aboutMe">
                <div>Alibek Manap</div>
                <div className='info'>
                    <div>
                        <img src="src/img/myPhoto.svg" alt="" />
                    </div>
                    <div>
                        <ul>
                            <li>Place of Birth: Taldykorgan city</li>
                            <li>Year of birth: 1985</li>
                            <li>Family status: Married</li>
                            <li>Place of work: Beeline Almaty</li>
                            <li>Position: Senior Engineer CS Core</li>
                            <li>Studying at: Attractor School Almaty</li>
                            <li>Higher education: Almaty Institute of Power Energy and Telecommunication</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}