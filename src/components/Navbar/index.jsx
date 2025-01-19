import { IoMdMenu } from "react-icons/io"
import styles from './Navbar.module.css'
import { useTheme } from "../../context/ThemeModeContext";

const Navbar = () => {

  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <nav className={styles.navbar}>
        <IoMdMenu />
        <h1>Cronômetro</h1>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckChecked"
            checked={theme}
            onChange={toggleTheme} />

          <label className="form-check-label" htmlFor="flexSwitchCheckChecked"></label>
        </div>
      </nav>
    </header>
  )
};

export default Navbar;
