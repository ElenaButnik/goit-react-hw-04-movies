import { Link } from 'react-router-dom';
import s from './MoviesPage.module.css';

export default function MoviesPage(){
    return(
        <Link to='/' className={s.link}>go back</Link>
    )
}