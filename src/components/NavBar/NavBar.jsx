import './NavBar.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const imgPokeApi = '/img/pokeapi.png';

  return (
    <>
      <nav>
        <NavLink to="/">
          <img src={imgPokeApi} alt="Imagen PokeApi" />
        </NavLink>
      </nav>
    </>
  );
};

export default NavBar;
