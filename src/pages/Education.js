import Title from "../components/Title";
import salute from '../pictures/salute.png'

function Education() {
    return (
        <body>
            <Title 
                image={salute}
                title='Education'
            />
            <p className='education-title'></p>
        </body>

    );
}

export default Education;