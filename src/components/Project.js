function Project({title, date, description, specs}) {
    return (
        <div className='project'>
            <div className='project-contents'>
                <div className='project-title'>
                    <div className='project-title-contents'>
                        <h3 className='project-name'>{title}</h3>
                        <h3 className='project-date'>{date}</h3>
                    </div>
                </div>
                <div className='project-body'>
                    <div className='project-body-contents'>
                        <p className='project-description'>{description}</p>
                        <p className='project-specs'>Built with {specs}</p>
                    </div>
                </div>
            </div>
            <div className='project-divider'></div>
        </div>
    );
}

export default Project;