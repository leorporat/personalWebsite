

function Title({title, image}) {
    return (
       <div className='section-title'>
             {/* <div className='line-left'></div> */}
                <img id='title-image' src={image}/>
                <h1 id='title-name'>{title}</h1>
             {/* <div className='line-right'></div> */}
        </div>
    );
}

export default Title;