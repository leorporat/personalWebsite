function Project({title, date, description, }) {
    return (
        <div className='project'>
            <div className='left-project-barrier'></div>
            <div className='project-title'>
                <h3 className='project-name'>{title}</h3>
                <h3 className='project-date'>{date}</h3>
            </div>
        </div>
    );
}

export default Project;