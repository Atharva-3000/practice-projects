import '../styles/header.scss';
import {HashLink} from 'react-router-hash-Link';
const Header = () => {
  return (
    <nav>
        <h1>TechInc.</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/contact"}>Contact</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <HashLink to={"/services"}>Services</HashLink>  
            {/* hash jab same page pr ho aur neeche jaana ho and / when new page ho */}
        </main>
    </nav>
  )
}

export default Header