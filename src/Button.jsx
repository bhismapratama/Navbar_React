import React from 'react'
import './Header.css'

const Button = ({ text }) => {

    return (
        <a
            className='btn_nav'
            href='/'
        >
            {text}
        </a>
    )
}

Button.defaultProps = {
    text: "let's talk",
}

export default Button
