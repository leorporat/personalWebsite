import Title from "../components/Title";
import manrunning from '../pictures/manrunning.png';
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import github from '../pictures/github.png';
import linkedin from '../pictures/linkedin.png'
import instagram from '../pictures/instagram.png'
import email from '../pictures/email.png'

function Personal() {
    return (
        <div className='home'>
            <div className='home-container'>
                {/* <Title 
                    image={manrunning}
                    title='Personal'
                /> */}
                <h2 className='home-title'>Hello!</h2>
                <p id='home-description'>I'm a first-year at the <a className='link' href='https://cse.umn.edu/cs' target='_blank' rel='noreferrer'>University of Minnesota</a> studying computer science. I'm still exploring the field and figuring out what I want to do :)</p>
                <p>Connect with me below:</p>
                <a href='https://github.com/leorporat' target='_blank' rel='noreferrer'><img className='link-png' alt='N/A' src={github}/></a>
                <a href='https://www.linkedin.com/in/leor-porat-a46137214/' target='_blank' rel='noreferrer'><img className='link-png' alt='N/A' src={linkedin}/></a>
                <a href='https://www.instagram.com/leorporat/' target='_blank' rel='noreferrer'><img className='link-png' alt='N/A' src={instagram} /></a>
                <a href='mailto: porat036@umn.edu'><img src={email} alt='N/A' className='link-png'/></a>

            </div>
        </div>

    );
}

{/* <a className='link' href='https://cse.umn.edu/cs' target='_blank'>the University of Minnesota</a> */}

export default Personal;