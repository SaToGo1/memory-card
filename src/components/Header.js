import '../styles/Header.css'

const Header = () => {

    return(
        <header>
            <div className='header__titleDiv'>
                <h1>Memory Game</h1>
            </div>
            <div className='header__score'>
                <p>Score: </p>
                <p>|</p>
                <p>Best: </p> 
            </div>
            <div className='header__hidden'></div>
        </header>
    )
}

export default Header;