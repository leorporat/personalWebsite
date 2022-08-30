import Title from "../components/Title";
import greenbook from '../pictures/greenbook.png';

function Education() {
    return (
        <body>
            <Title 
                image={greenbook}
                title='Education'
            />
            <p className='education-title'></p>
        </body>

    );
}

export default Education;