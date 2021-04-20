import { Link } from 'react-router-dom';
import { pokemonData } from '../data/pokemonData';
import { setTypeColor } from '../services';

const Navbar: React.FC = () => {
    return(
        <nav className="nav navbar-light bg-light">
            <li className="nav-item">
                <span className="nav-link active">
                    <Link to={`/`}>Home</Link>
                </span>
            </li>
        </nav>
    )
};

export default Navbar;
