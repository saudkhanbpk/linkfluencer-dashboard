import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MinimizeContextProvider } from './context/LayoutContext';
import RoutesConfig from './routes/RoutesConfig';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="max-w-[2200px] m-auto">
      <Router>
        <MinimizeContextProvider>
          <UserProvider>
            <RoutesConfig />
          </UserProvider>
        </MinimizeContextProvider>
      </Router>
    </div>
  );
}

export default App;
