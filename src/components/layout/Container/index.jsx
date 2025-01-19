import styles from './Container.module.css'
import { useTheme } from '../../../context/ThemeModeContext';

const Container = ({ children }) => {

  const { theme } = useTheme()
  
  return (
    <main
      className={`${styles.container} ${theme ? 'dark-theme' : 'light-theme'}`}>
      { children }
    </main>
  )
};

export default Container;
