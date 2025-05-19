import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const router = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};
function App() {
  return (
    <Router future={router.future}>
      <div className="app">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App; 