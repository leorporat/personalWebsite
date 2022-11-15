import Navline from '../components/Navline';
import mail_png from '../pictures/mail_png.png';

function About() {
    return (
        <body>
            <div className='about'>
                <p className='about-guide'>Click the tabs above to learn a little more about me :)</p>
                <div className='about-body'>
                    <h1 className='about-title'> 👋 Hey, I'm Leor</h1>
                    <div className='about-text'>
                        <p>17 year old college freshman interested in everything FinTech</p>
                        <p id='about-connect'>Connect with me below:</p>
                        {/* <Navline id='navline-email' name='Email'/> */}
                        <Navline name='LinkedIn' id='linkedin-navline' site='https://www.linkedin.com/in/leor-porat-a46137214/'/>
                        <Navline name='GitHub' id='github-navline' site='https://github.com/leorporat'/>
                        {/* <Navline id='navline-email' name='Email' logo={mail_png}/>
                        <Navline logo={linkedin_png} name='LinkedIn' site='https://www.linkedin.com/in/leor-porat-a46137214/'/>
                        <Navline name='GitHub' logo={github_png} site='https://github.com/leorporat'/> */}
                    </div>
                </div>
            </div>
        </body>
    )
}

export default About;

