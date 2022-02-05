import { Home } from 'screens/Home';
import { ThemeProvider } from 'context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
