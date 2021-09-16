import style from './header.module.css';

const Header = (props) => {

    return (
        <div className={style.header}>
            <div className={style.title}>Demo React</div>
        </div>
    );
}

export default Header;