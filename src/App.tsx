import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { MinimizeContextProvider } from './context/LayoutContext';
import RoutesConfig from './routes/RoutesConfig';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Importer les styles
import CustomToast from "./components/common/Toast";

function App() {
  return (
    <div className="max-w-[2200px] m-auto">
      <Router>
        <MinimizeContextProvider>
          <RoutesConfig />
          <CustomToast />
          <ToastContainer />
        </MinimizeContextProvider>
      </Router>
    </div>
  );
}


export default App;
