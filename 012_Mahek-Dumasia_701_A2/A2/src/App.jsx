import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Import all components from the components folder
import Concepts from './components/Concepts';
import Counter from './components/Counter';
import HooksDemo from './components/HooksDemo';
import DigitalClock from './components/DigitalClock';
import ManualForm from './components/ManualForm';
import LibraryForm from './components/LibraryForm';
import EmployeeTable from './components/EmployeeTable';
import StudentSearch from './components/StudentSearch';

export default function App() {
  return (
    <Router>
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">React Assignment</Link>
          <div className="navbar-nav">
            <Link className="nav-link" to="/">1-2. Concepts</Link>
            <Link className="nav-link" to="/counter">3. Counter</Link>
            <Link className="nav-link" to="/hooks">4. useState & useRef</Link>
            <Link className="nav-link" to="/clock">5. Clock</Link>
            <Link className="nav-link" to="/manual-form">6. Manual Form</Link>
            <Link className="nav-link" to="/library-form">7. Hook Form</Link>
            <Link className="nav-link" to="/employees">8. Employees</Link>
            <Link className="nav-link" to="/students">9. Students</Link>
          </div>
        </div>
      </nav>

      {/* Main Container where routes display */}
      <div className="container pb-5">
        <Routes>
          <Route path="/" element={<Concepts />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/hooks" element={<HooksDemo />} />
          <Route path="/clock" element={<DigitalClock />} />
          <Route path="/manual-form" element={<ManualForm />} />
          <Route path="/library-form" element={<LibraryForm />} />
          <Route path="/employees" element={<EmployeeTable />} />
          <Route path="/students" element={<StudentSearch />} />
        </Routes>
      </div>
    </Router>
  );
}