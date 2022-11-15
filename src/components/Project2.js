function Project2({image, github_link, description, title, technologies}) {
    return (
        <div className='project2'>
            <div className='project2-container'>
                    <div className='project2-contents'>
                        <img className='project2-image' alt='N/A' src={image}/>
                        <div className='project2-body'>
                            <div className='project2-text'>
                                <h2 className='project2-title'>{title}</h2>
                                <p className='project2-description'>{description}</p>
                            </div>
                            <div className='project2-specs'>
                                <a className='project2-link' target='_blank' rel='noreferrer' href={github_link}>[github link]</a>
                                <p className='project2-technologies'>{technologies}</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Project2;