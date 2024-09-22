import React from 'react'

const Navbar = ({setCategory}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><span className='badge text-bg-light'>News House</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav">
                            <li className='nav-item'>
                            <div className="nav-link btn"  onClick={() => setCategory("general")}>General</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("sports")}>Sports</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("science")}>Science</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("technology")}>Technology</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("health")}>Health</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("entertainment")}>Entertainment</div>
                            </li>

                            <li className='nav-item'>
                            <div className="nav-link btn" onClick={() => setCategory("business")}>Business</div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar