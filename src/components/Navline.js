import React from 'react';

function Navline({ logo, name, site }) {
    return (
        <div>
            <a className='navline-text' target='_blank' rel='noreferrer' href={site}><img className='navline-logo' src={logo} alt='NA'/>{name}</a>
        </div>
    )
}

export default Navline;