import { Box, CssBaseline } from '@material-ui/core';
import CardComponent from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import ThemeWrapper from './theme/ThemeWrapper';
import ThemeToggleButton from './theme/ToggleButton';
function App() {
  return (
    <div className='App'>
      <ThemeWrapper>
        <CssBaseline />
        <Navbar />
        <CardComponent />
        <Box>
          <ThemeToggleButton />
        </Box>
      </ThemeWrapper>
    </div>
  );
}

export default App;
