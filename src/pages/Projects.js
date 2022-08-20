import Project from "../components/Project";

function Projects() {
    return (
        <body>
            <div className='section-title'>
                <div className='line-left'></div>
                <p id='title-name'>Projects</p>
                <div className='line-right'></div>
            </div>
            <Project 
                title='This website' 
                date='(July 2022)'
            />
        </body>
    );
}

export default Projects;