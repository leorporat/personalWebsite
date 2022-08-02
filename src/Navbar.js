import salute from './pictures/salute.png'
import {Link, useMatch, useResolvedPath} from "react-router-dom"

function Navbar() {
    return (
        <div className='nav-parent'>
            <head>
                <title>Leor Porat</title>
                <link rel="shortcut icon" href={salute}/>
            </head>
            <nav>
                <div>
                    <Link to="/" className="site-title">Leor Porat</Link>
                </div>
                <ul>
                    <SetActiveRoute to="/education">Education</SetActiveRoute>
                    <SetActiveRoute to="/projects">Projects</SetActiveRoute>
                    <SetActiveRoute to="/personal">Personal</SetActiveRoute>
                </ul>
            </nav>
        </div>
    )
}

function SetActiveRoute({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    );
    
}

export default Navbar;