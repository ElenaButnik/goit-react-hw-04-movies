import { NavLink } from "react-router-dom";
import s from './Nav.module.css';

const Navigation = () => (
    <nav className={s.nav}>
        <NavLink exact to='/' className={s.link} activeClassName={s.activeLink}>Home</NavLink>
        <NavLink to='/Movies' className={s.link} activeClassName={s.activeLink}>Movies</NavLink>
    </nav>
);

export default Navigation;