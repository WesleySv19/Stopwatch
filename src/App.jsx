import Navbar from "./components/Navbar"
import Container from './components/layout/Container'
import { ThemeContextProvider } from "./context/ThemeModeContext";


const App = () => {
  return (
    <ThemeContextProvider>
      <Container>
        <Navbar />
      </Container>
    </ThemeContextProvider>
  )
};

export default App;
