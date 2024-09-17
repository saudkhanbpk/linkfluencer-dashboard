import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MinimizeContextProvider } from './context/LayoutContext';
import RoutesConfig from './routes/RoutesConfig';

function App() {
  return (
    <div className="max-w-[2200px] m-auto">
      <Router>
        <MinimizeContextProvider>
          <RoutesConfig />
        </MinimizeContextProvider>
      </Router>
    </div>
  );
}

export default App;
