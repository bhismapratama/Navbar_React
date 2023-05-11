import React, { useState } from 'react'
import './Header.css'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Header = ({ exp, about, projects }) => {
    const navigate = useNavigate()
    const [isMobile, setIsMobile] = useState(false)

    return (
        <header>
            <div className="logo">
                <a href='/' onClick={() => navigate('/')} className="logo">
                    BHISMA
                </a>
            </div>

            <button id='menu-bar'
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <i className='fas fa-times'></i> : <i className='fas fa-bars'></i>}
            </button>

            <nav className={isMobile ? 'navbar nav-mobile' : 'navbar'}
                onClick={() => setIsMobile(false)}
            >
                <a href="/Experiences" onClick={() => navigate('/Experiences')}>{exp}</a>
                <a href="/About" onClick={() => navigate('/About')}>{about}</a>
                <a href="/Projects" onClick={() => navigate('/Projects')}>{projects}</a>
                <Button />
            </nav>
        </header>
    )
}

Header.defaultProps = {
    exp: 'exp',
    about: 'about',
    projects: 'projects',
}

export default Header
