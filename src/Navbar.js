function Navbar() {
    return (
        <div className='nav-parent'>
            <head>
                <title>Leor Porat</title>
                <link rel="shortcut icon" href="./pictures/salute.pn"/>
            </head>
            <nav>
                <a href="/" className="site-title">Leor Porat</a>
                <ul>
                    <SetActiveRoute href="/education">Education</SetActiveRoute>
                    <SetActiveRoute href="/projects">Projects</SetActiveRoute>
                    <SetActiveRoute href="/personal">Personal</SetActiveRoute>
                </ul>
            </nav>
        </div>
    )
}

function SetActiveRoute({ href, children, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>{children}</a>
        </li>
    );
    
}

export default Navbar;