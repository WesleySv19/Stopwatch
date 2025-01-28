import Navbar from "./components/Navbar"
import Container from './components/layout/Container'
import StopWatch from "./components/Stopwatch";
import { ThemeContextProvider } from "./context/ThemeModeContext";


const App = () => {
  return (
    <ThemeContextProvider>
      <Container>
        <Navbar />
        <StopWatch />
      </Container>
    </ThemeContextProvider>
  )
};

export default App;
