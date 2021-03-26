import { CssBaseline } from '@material-ui/core';
import CardComponent from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className='App'>
      <CssBaseline />
      <Navbar />
      <CardComponent />
    </div>
  );
}

export default App;
