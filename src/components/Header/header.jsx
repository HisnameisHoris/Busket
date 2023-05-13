import './header.css';
import logo from '../../images/chest.png'

export default function Header(){
    return(
        <>
        <nav>
            <div className="nav-wrapper container">
            <a href="#" className="brand-logo">React <img src={logo}/> Shop</a>
            </div>
        </nav>
        </>
    );
}