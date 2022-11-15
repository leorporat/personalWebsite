import Project2 from "../components/Project2"
import Title from "../components/Title";
import tools from '../pictures/tool_png.png';
import website_photo from '../pictures/website_photo.png'

function Projects() {
    return (
        <body>
            <Title
                title='Projects'
                image={tools}
            />
            <Project2 
                image={website_photo} 
                title='Personal Website' 
                description='Website about myself highlighting some of my work'
                github_link='https://github.com/leorporat/personalWebsite'
                technologies='React'
            />
        </body>
    );
}

export default Projects;