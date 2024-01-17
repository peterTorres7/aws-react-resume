import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <h1>Peter Torres</h1>
            <p>
                New York, NY | 
                206-422-1138 | 
                <a href='mailto:torres7p@gmail.com'> Email</a> | 
                <a href='https://www.linkedin.com/in/torres-peter' target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
                <a href='https://www.github.com/peterTorres7' target='_blank' rel='noopener noreferrer'> GitHub</a>
            </p>
        </div>
    )
}

export default Header;