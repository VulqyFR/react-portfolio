import Home from "./pages/Home"
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import useResponsiveFontSize from './hooks/useResponsiveFontSize';

function App() {
  const fontSize = useResponsiveFontSize();
  return (
    <div style={fontSize}>
    <ThemeProvider>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
    </div>
  );
}

export default App;