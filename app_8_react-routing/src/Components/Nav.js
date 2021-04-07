import {Link} from 'react-router-dom';

export  const Nav =()=>{
return (
    <nav>
        <Link to="/about">
        <li>About</li>
        </Link>

        <Link to="/">
        <li>Home</li>
        </Link>

        <Link to="/shop">
        <li>Shop</li>
        </Link>
    </nav>
)
}