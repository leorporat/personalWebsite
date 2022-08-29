function Project({title, date, description, specs}) {
    return (
        <div className='project'>
            <div className='left-project-barrier'></div>
            <div className='project-title'>
                <h3 className='project-name'>{title}</h3>
                <h3 className='project-date'>{date}</h3>
            </div>
            <div className='project-body'>
                <p className='project-description'>{description}</p>
                <p className='project-specs'>Built with {specs}</p>
            </div>
        </div>
    );
}

export default Project;