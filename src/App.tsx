import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import MyLinks from './pages/MyLinks';
import BulkUpload from './pages/BulkUpload';
import Analytics from './pages/Analytics';
import { MinimizeContextProvider } from './context/LayoutContext';
function App() {
  return (
    <div className='max-w-[1920px] m-auto'>
      <Router>
        <MinimizeContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/my-links" element={<MyLinks />} />
            <Route path="/bulk-upload" element={<BulkUpload />} />
            <Route path="/analytics" element={<Analytics />} />
          </Route>
        </Routes>
        </MinimizeContextProvider>
      </Router>
    </div>
  );
}

export default App;
