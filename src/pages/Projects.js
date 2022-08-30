// import Project from "../components/Project";
import Title from "../components/Title";
import tools from '../pictures/tool_png.png';


function Projects() {
    return (
        <body>
            <Title
                title='Projects'
                image={tools}
            />
            {/* <Project 
                title='This website' 
                date='(July 2022)'
                description='Website about myself, a short summer project'
                specs='HTML, CSS, React.js'
            /> */}
        </body>
    );
}

export default Projects;